pragma solidity ^0.4.11;

import "./HouseholdLibrary.sol";

/*
 * Zander Labuschagne se baie werk volg Hier
 * 23585137@protonmail.ch | zander.labuschagne@protonmail.ch
 * Hierdie kode word gepubliseer onder die BSD-3 nuwe of hersiende lisensie
 */

//HouseholdContract.new().then(function(res) { sc = HouseholdContract.at(res.address) }) //tik die lyntji in truffle console om die adres te kry dan sc.xxxxxx kan methods execute

contract HouseholdContract {

	//credits/bounty van water gespaar
	mapping (address => uint256) bounty;
	//id number van persoon
	mapping (address => string) id;
	//hoeveelheid die huishouding al gebruik het
	mapping (address => uint256) cumulativeUsage;

	mapping (address => uint256) price;

	mapping (address => uint256) time;

	mapping (address => string) meterNumber;

	uint8 litre_price;

	uint256 lowerPriceReqFactor;

	uint8 penaltyFactor;

	string value; //TODO: Remove on final implementation

	mapping (address => uint8) numberOfResidents;

	function HouseholdContract() {
		setLitrePrice(1);
		setPenaltyFactor(5);
		setLowerPriceReqFactor(10);
	}

	function register(string _id, string _meterNumber, uint8 _residents) public returns (uint8 r_err) {
		id[msg.sender] = _id;
		meterNumber[msg.sender] = _meterNumber;
		numberOfResidents[msg.sender] = _residents;
		setTime();
		resetWaterUsage();
		return 0;
		//value = id[msg.sender];
	}

	/*
	 * To change the c/litre if desired
	**/
	function setLitrePrice(uint8 _litre_price) public returns (uint8 r_litre_price) {
		litre_price = _litre_price;
		return litre_price;
	}

	/*
	 * Assign the default price of water to the contract instance
	**/
	function setInitPrice() public {
		price[msg.sender] = litre_price;
	}

	/*
	* Called hourly or daily to update water _usage
	* Called from water metre
	**/
	function addWaterUsage(uint256 _usage) public returns (uint256 usage) {
		cumulativeUsage[msg.sender] = _usage;
		return cumulativeUsage[msg.sender];
	}

	/**
	* the cumulative water usage resets every month or when the user pays
	**/
	function resetWaterUsage() public returns (uint256 usage) {
		cumulativeUsage[msg.sender] = 0;
		//bounty[msg.sender] = 0;
		//resets the Pi.... --assumption
		return cumulativeUsage[msg.sender];
	}

	/*
	* calculate _recommendedCumulativeUsage from frontend
	* Pay totals price and convert remainder to bounty and return voucher as well
	*/
	function pay(uint256 _recommendedDailyUsage, uint256 _bountyFactor) public returns (uint256 r_voucher, uint256 r_amount) {
		uint256 voucher = 0;
		uint256 _recommendedCumulativeUsage = HouseholdLibrary.calculateRecommendedCumulativeUsage(_recommendedDailyUsage, block.timestamp, getTime(), numberOfResidents[msg.sender]);
		if(_recommendedCumulativeUsage >= cumulativeUsage[msg.sender]) {
			bounty[msg.sender] += HouseholdLibrary.calculateBounty(_recommendedCumulativeUsage, cumulativeUsage[msg.sender]);
			voucher = HouseholdLibrary.calculateVoucher(bounty[msg.sender], _bountyFactor);
		}
		else
			price[msg.sender] += HouseholdLibrary.increasePrice(cumulativeUsage[msg.sender], _recommendedCumulativeUsage, litre_price);
		uint256 amount = HouseholdLibrary.calculateOutstandingBalance(cumulativeUsage[msg.sender], price[msg.sender], 0);
		setTime();
		resetWaterUsage();
		return (voucher, HouseholdLibrary.centToRand(amount));
	}

	/*
	 * return the amount it would cost in R at the moment to pay the water bill
	**/
	function getOutstandingBalance(uint256 _recommendedDailyUsage) public view returns (uint256 balance) {
		//uint256 _recommendedCumulativeUsage = HouseholdLibrary.calculateRecommendedCumulativeUsage(_recommendedDailyUsage, block.timestamp, getTime(), numberOfDependants[msg.sender]);
		/*value =*/ return HouseholdLibrary.calculateOutstandingBalance(cumulativeUsage[msg.sender], price[msg.sender], HouseholdLibrary.increasePenaltyFactor(cumulativeUsage[msg.sender], HouseholdLibrary.calculateRecommendedCumulativeUsage(_recommendedDailyUsage, block.timestamp, getTime(), numberOfResidents[msg.sender]), litre_price, penaltyFactor));

		//return value;
	}

	/*
	* function to lower price if it is high by paying much more tha n usual price
	**/
	function lowerPrice(uint256 _factor) public returns (uint256 r_price) {
		if(price[msg.sender] > litre_price && _factor < (price[msg.sender] - litre_price)) {
			price[msg.sender] -= _factor;
		}

		return price[msg.sender];
	}

	/*
	 * If one wants to preview the amount to be paid in R in order to lower the price/litre if it were raised due to increasePenaltyFactor
	**/
	function getLowerPriceReq() public view returns (uint256 amount) {
		return HouseholdLibrary.lowerPriceReq(price[msg.sender], litre_price, lowerPriceReqFactor);
	}

	/*
	 * Sets the amount in R which users pay to lower the penalty payments per litre
	**/
	function setLowerPriceReqFactor(uint256 _factor) public returns (uint256 factor) {
		lowerPriceReqFactor = _factor;
		return lowerPriceReqFactor;
	}

	/*
	 * this is the amount the user pays per litre he overused(as well as for future payments) it is the amount of litres per cent ex: 5 would be paying 1c extra for every addisional 5l used
	 * Ex; 1 would then also be paying 1c extra for every addisional litre used
	 * Ex: 2 would then also be paying 1c extra for every addisional 2l used
	 * This should probably be inverted but the current price is 1c per litre and 1l per 1c decrease is actually a lot
	**/
	function setPenaltyFactor(uint8 _penaltyFactor) public returns (uint8 factor) {
		penaltyFactor = _penaltyFactor;
	}

	/*
	 * Get current water usage for personal interests
	**/
	function getWaterUsage() public view returns (uint256 usage) {
		return cumulativeUsage[msg.sender];
	}

	/*
	 * Get the current bounty for testing purposes
	**/
	function getBounty() public view returns (uint256 r_bounty) {
		return bounty[msg.sender];
	}

	/*
	 * Called when payment is made to save when the user last made a payment
	**/
	function setTime() {
		time[msg.sender] = block.timestamp;
	}

	/*
	 * Accessor for the time mapping
	*/
	function getTime() public view returns (uint r_time) {
		return time[msg.sender];
	}

	/*
	* just for testing
	*/
	function getValue() public view returns (string val) {
		return value;
	}
}
