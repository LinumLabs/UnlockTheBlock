const HouseholdMeters = artifacts.require("./HouseholdMeters.sol");
const PriceEstimator = artifacts.require("./PriceEstimator/PriceEstimator.sol");
const IPriceEstimator = artifacts.require("./PriceEstimator/IPriceEstimator.sol");
const PriceEstimatorProxy = artifacts.require("./PriceEstimator/PriceEstimatorProxy.sol");
const IOwnableUpgradeableImplementation = artifacts.require("./Upgradeability/OwnableUpgradeableImplementation/IOwnableUpgradeableImplementation.sol");
const WaterVoucher = artifacts.require("./WaterVouchers.sol");
const WaterGoverning = artifacts.require("./WaterGoverning.sol");
const util = require('./util');
const expectThrow = util.expectThrow;
const web3 = require("web3");

contract('PriceEstimator', function (accounts) {
    const _owner = accounts[0];
    const _notOwner = accounts[1];

    const _householdMembers = 4;
    const _householdMembersUpdate = 6;

    const _householdMeter = "0x638cdecbdb9af6f7bc9b9415633fb42be0f89ad8";
    const _householdMeterUpdate = "0x638cdecbdb9af6f7bc9b9415633fb42be0f89ad9";

    const _admin1 = accounts[2];
    const _admin2 = accounts[3];

    const _liters1 = 4000;
    const _liters2 = 10000;
    const _liters3 = 30000;
    const _liters4 = 60000;

    const _price1 = 456;
    const _price2 = 1775;
    const _price3 = 4153;
    const _price4 = 23859;

    const _voucherId1 = "1";
    const _voucherId2 = "2";

    let HouseholdMetersContract;
    let PriceEstimatorContract;
    let WaterVoucherContract;
    let PriceEstimatorContractImpl;
    let PriceEstimatorContractProxy;

    describe("Purchase voucher", () => {
        beforeEach(async function () {
            HouseholdMetersContract = await HouseholdMeters.new({
                from: _owner
            });

            WaterVoucherContract = await WaterVoucher.new({
                from: _owner
            });

            WaterGoverningContract = await WaterGoverning.new(WaterVoucherContract.address, {
                from: _owner
            });

            let PriceEstimatorContractImpl = await PriceEstimator.new({
                from: _owner
            });

            let PriceEstimatorContractProxy = await PriceEstimator.new(PriceEstimatorContractImpl.address, {
                from: _owner
            });

            PriceEstimatorContract = await IPriceEstimator.at(PriceEstimatorContractProxy.address);

            await PriceEstimatorContract.init({
                from: _owner
            });
            await PriceEstimatorContract.setHouseholdMetersContract(HouseholdMetersContract.address);
            await PriceEstimatorContract.setWaterVouchersContract(WaterVoucherContract.address);

            await WaterVoucherContract.setPriceEstimatorContractAddress(PriceEstimatorContract.address);
            await WaterVoucherContract.setWaterGoverningContractAddress(WaterGoverningContract.address);

            await HouseholdMetersContract.addAdmin(_admin1);
            await HouseholdMetersContract.addHouseholdMeter(_householdMeter, _householdMembers, {
                from: _admin1
            });

            await WaterVoucherContract.addIntermediary(_admin1);
        });

        it("should purchase a voucher", async function () {
            let result = await WaterVoucherContract.purchaseVoucher(_voucherId1, _householdMeter, _liters1, {
                from: _admin1
            });

            assert.isTrue(Boolean(result.receipt.status), "The voucher was not purchased successfully");
        });

        it("should increase meter liters", async function () {
            let result = await WaterVoucherContract.purchaseVoucher(_voucherId1, _householdMeter, _liters1, {
                from: _admin1
            });
            let meterLiters = await WaterGoverningContract.meterLiters(_householdMeter);
            assert(meterLiters.eq(_liters1), "The voucher was not purchased successfully");
        });
    });

    // TODO write more test for
    // addIntermediary
    // removeIntermediary
    // setPriceEstimatorContractAddress
    // setWaterGoverningContractAddress
    // estimatePrice
    // getLastVoucherLitersInMonth
});