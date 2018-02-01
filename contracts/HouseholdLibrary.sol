pragma solidity ^0.4.11;

/*
 * Zander Labuschagne se baie werk volg Hier
 * 23585137@protonmail.ch | zander.labuschagne@protonmail.ch
 * Hierdie kode word gepubliseer onder die BSD-3 nuwe of hersiende lisensie
 */

library HouseholdLibrary {
	function calculateBounty(uint256 _recommendedCumulativeUsage, uint256 _userCumulativeUsage) public pure returns (uint256 bounty) {
		return _recommendedCumulativeUsage - _userCumulativeUsage;
	}

	function calculateVoucher(uint256 _bounty, uint256 _factor) public pure returns (uint256 voucher) {
		return _bounty * _factor;
	}

	function increasePrice(uint256 _usage, uint256 _recommendedUsage, uint8 _litre_price) public pure returns (uint256 newPrice) {
		return _litre_price * (_usage - _recommendedUsage);
	}

	/*function getAmountToPay(uint256 _usage, uint256 _price) public pure returns (uint256 amount) {
		return _usage * _price;
	}*/

	function centToRand(uint256 _cents) public pure returns (uint256 rands) {
		return _cents / 100;
	}
	
	function increasePenaltyFactor(uint256 _usage, uint256 _recommendedUsage, uint8 _litre_price, uint8 _penaltyFactor) public pure returns (uint256 factor) {
		if(_recommendedUsage < _usage)
			return _litre_price * (_usage - _recommendedUsage / _penaltyFactor);
		else
			return 0;
	}

	function calculateOutstandingBalance(uint256 _usage, uint256 _price, uint256 _factor) public pure returns (uint256 amount) {
		return centToRand(_usage * (_price + _factor));
	}

	function lowerPriceReq(uint256 _price, uint8 _litre_price, uint256 _decreasePricePaymentFactor) public pure returns (uint256 price) {
		return centToRand((_price - _litre_price)) * _decreasePricePaymentFactor;
	}

	function getTimeDifferenceDays(uint256 _time1, uint256 _time2) public pure returns (uint256 timeDifference) {
		return (_time2 - _time1) / (1000 * 60 * 60 * 24);
	}

	function calculateRecommendedCumulativeUsage(uint256 _recommendedDailyUsage, uint256 _current, uint256 _previous, uint8 _deps) returns (uint256 cumulativeUsage) {
		return _recommendedDailyUsage * getTimeDifferenceDays(_previous, _current) * _deps;
	}
}
