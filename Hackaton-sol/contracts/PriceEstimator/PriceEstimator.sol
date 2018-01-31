pragma solidity ^0.4.18;

import "./../HouseholdMeters.sol";
import "./../WaterVouchers.sol";
import "./../Upgradeability/OwnableUpgradeableImplementation/OwnableUpgradeableImplementation.sol";
import "./IPriceEstimator.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";

contract PriceEstimator is IPriceEstimator, OwnableUpgradeableImplementation {
    using SafeMath for uint256;
    HouseholdMeters householdMetersContract;
    WaterVouchers waterVouchersContract;

    function setHouseholdMetersContract(address _householdMetersAddress) public onlyOwner returns(bool success) {
        householdMetersContract = HouseholdMeters(_householdMetersAddress);
        return true;
    }

    function setWaterVouchersContract(address _waterVoucherAddress) public onlyOwner returns(bool success) {
        waterVouchersContract = WaterVouchers(_waterVoucherAddress);
        return true;
    }

    function getCurrentMonthLiters(address _meter) public view returns(uint256 liters) {
        return waterVouchersContract.getLastVoucherLitersInMonth(_meter, now - 4 weeks);
    }

    function estimate(address _meter, uint _liters) public view returns(uint256 amount, uint256 price) {        
        require(_meter != address(0));
        require(_liters >= 3000);
        require(_liters % 1000 == 0);

        uint256 householdSize = householdMetersContract.getHouseholdMembersCount(_meter);
        uint litersMonth = _liters + this.getCurrentMonthLiters(_meter);

        if (litersMonth <= householdSize.mul(1500)) {
            return (_liters.div(1000).mul(456), 456); // R4.56
        }
        if (litersMonth <= householdSize.mul(2625)) {
            return (_liters.div(1000).mul(1775), 1775); // R17.75
        }
        if (litersMonth <= householdSize.mul(5000)) {
            return (_liters.div(1000).mul(2493), 2493); // R24.93
        }
        if (litersMonth <= householdSize.mul(8750)) {
            return (_liters.div(1000).mul(4153), 4153); // R41.53
        }
        if (litersMonth <= householdSize.mul(12500)) {
            return (_liters.div(1000).mul(7029), 7029); // R70.29
        } else {
            return (_liters.div(1000).mul(23859), 23859); // R238.59
        }
    }
}