pragma solidity ^0.4.18;
import "./helpers/CustomMintableToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";

contract SimpliWaterToken is CustomMintableToken, BurnableToken {

    uint private dailyLimit; //1000 = 1L
    uint private penaltyChargePerLiter; //1000 = 1R
    uint private normalChargePerLiter; //1000 = 1R
    mapping(address => Meter) private registeredMeters;
    uint private constant ETHERIUM_TO_SWT_EXCHANGE_RATE = 2; // 1 ETH = 2 SWT for the sake of the proof of concept.
    mapping(address => uint) private meterUsage;

    struct Meter {
        address meterAddress;
        mapping(uint => HouseMember) houseMembers;
        uint totalHouseMembers;
        uint registrationEpochTime;
    }

    struct HouseMember {
        bytes16 firstName;
        bytes32 lastName;
        uint memberID; //form of unique identification like ID or passport
    }

    event MeterRegisteredEvent(address _meterAddress);
    event UserAddedEvent(address _meterAddress, uint _memberID);
    

    function SimpliWaterToken() public {
        totalSupply_ = 0; // New coins will continuously be minted when needed.
        //making this variable will make things more complex when it comes to penalty payments
        //so will keep these constant for the proof of concept.
        dailyLimit = 50000; 
        penaltyChargePerLiter = 4000; 
        normalChargePerLiter = 1000;
    }
   
    function registerMeter(address _meterAddress, uint _registrationEpochTime) onlyOwner public {
        require(registeredMeters[_meterAddress].meterAddress == address(0));
        var newMeter = Meter({meterAddress: _meterAddress, totalHouseMembers:0, registrationEpochTime: _registrationEpochTime});
        registeredMeters[_meterAddress] = newMeter;
        meterUsage[_meterAddress] = 0;
        
        MeterRegisteredEvent(_meterAddress);
    }

    function retrieveMeterStats(address _meterAddress) view public returns(address meterAddress, uint balance, uint totalHouseMembers, uint registrationEpochTime, uint usage) {
        require(registeredMeters[_meterAddress].meterAddress != address(0));
        return (registeredMeters[_meterAddress].meterAddress, registeredMeters[_meterAddress].totalHouseMembers, registeredMeters[_meterAddress].registrationEpochTime, balanceOf(_meterAddress), getMeterUsage(_meterAddress));
    }

    function retrieveUtilityConstants() view public returns(uint _normalCharge, uint penaltyCharge, uint _dailyLimit) {
        return (normalChargePerLiter, penaltyChargePerLiter, dailyLimit);
    }

   function addUserToMeter(address _meterAddress, bytes16 _firstName, bytes16 _lastName, uint _memberID) onlyOwner public {
        require(registeredMeters[_meterAddress].meterAddress != address(0));
        require(registeredMeters[_meterAddress].houseMembers[_memberID].memberID == 0);        
        var newMember = HouseMember(_firstName, _lastName, _memberID);
        registeredMeters[_meterAddress].houseMembers[_memberID] = newMember;
        registeredMeters[_meterAddress].totalHouseMembers += 1;
        UserAddedEvent(_meterAddress, _memberID);
    }

   function getDailyLimit() view public returns(uint _dailyLimit) {
        return dailyLimit;
    }

   function getPenaltyChargePerLiter() view public returns (uint penaltyCharge) {
        return penaltyChargePerLiter;
    }

    function getNormalChargePerLiter() view public returns(uint _normalCharge) {
        return normalChargePerLiter;
    }

    function topUpBalance(address _meterAddress, uint _value) onlyOwner public {
        topUp(_meterAddress, _value);
    }

    function topUp(address _meterAddress, uint _value) private {
        require(registeredMeters[_meterAddress].meterAddress != address(0));
        mint(_meterAddress, _value);    
    }

    function burn(uint _tokensToBurn) public {
        require(registeredMeters[msg.sender].meterAddress != address(0));
        require(balances[msg.sender] >= _tokensToBurn);
        super.burn(_tokensToBurn);
        meterUsage[msg.sender] += _tokensToBurn;        
    }

    function topUpBalanceWithEther(address _meterAddress, uint _value) payable public {
        topUp(_meterAddress, _value);
    }


    function getMeterUsage(address _meterAddress) view public returns(uint) {
        return meterUsage[_meterAddress];
    }

    function getEthBalance(address _meterAddress) view public returns(uint) {
        return _meterAddress.balance;
    }

   }