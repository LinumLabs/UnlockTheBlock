pragma solidity ^0.4.18;

import "./../Upgradeability/OwnableUpgradeableImplementation/IOwnableUpgradeableImplementation.sol";

contract IPriceEstimator is IOwnableUpgradeableImplementation {

    function setHouseholdMetersContract(address _householdMetersAddress) public returns(bool success);

    function setWaterVouchersContract(address _waterVoucherAddress) public returns(bool success);

    function getCurrentMonthLiters(address _meter) public view returns(uint256 liters);

    function estimate(address _meter, uint _liters) public view returns(uint256 amount, uint256 price); 
}