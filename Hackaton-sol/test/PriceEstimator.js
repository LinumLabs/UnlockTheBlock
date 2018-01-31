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

    var wait = ms => new Promise((r, j) => setTimeout(r, ms))

    describe("Creating PriceEstimator contract", () => {
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

        it("should get the owner of the first contract", async function () {
            const owner = await PriceEstimatorContract.getOwner();
            assert.strictEqual(owner, _owner, "The owner is not set correctly");
        });
    });

    describe("Upgrade PriceEstimator contract", () => {
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

            PriceEstimatorContractImpl = await PriceEstimator.new({
                from: _owner
            });

            PriceEstimatorContractProxy = await PriceEstimator.new(PriceEstimatorContractImpl.address, {
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

        it("should upgrade contract from owner", async function () {
            let PriceEstimatorContractImpl2 = await PriceEstimator.new({
                from: _owner
            });
            const upgradeableContract = await IOwnableUpgradeableImplementation.at(PriceEstimatorContractProxy.address);
            await upgradeableContract.upgradeImplementation(PriceEstimatorContractImpl2.address);
            const newImplAddress = await upgradeableContract.getImplementation();
            assert.strictEqual(PriceEstimatorContractImpl2.address, newImplAddress, "The address is not set correctly");
        });

        it("should throw on upgrade contract from not owner", async function () {
            let PriceEstimatorContractImpl2 = await PriceEstimator.new({
                from: _owner
            });
            const upgradeableContract = await IOwnableUpgradeableImplementation.at(PriceEstimatorContractProxy.address);
            await expectThrow(upgradeableContract.upgradeImplementation(PriceEstimatorContractImpl2.address, {
                from: _notOwner
            }));
        });
    });

    describe("Estimate correct prices", () => {
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

        it("should estimate price for less than 6000 liters", async function () {
            let result = await PriceEstimatorContract.estimate(_householdMeter, _liters1);
            let expectedResult = (_liters1 / 1000) * _price1;
            assert(result[0].eq(expectedResult), "The price was not correct");
        });

        it("should estimate price for less than 10500 liters", async function () {
            let result = await PriceEstimatorContract.estimate(_householdMeter, _liters2);
            let expectedResult = (_liters2 / 1000) * _price2;
            assert(result[0].eq(expectedResult), "The price was not correct");

        });

        it("should estimate price for less than 30000 liters", async function () {
            let result = await PriceEstimatorContract.estimate(_householdMeter, _liters3);
            let expectedResult = (_liters3 / 1000) * _price3;
            assert(result[0].eq(expectedResult), "The price was not correct");
        });

        it("should estimate price for more than 50000 liters", async function () {
            let result = await PriceEstimatorContract.estimate(_householdMeter, _liters4);
            let expectedResult = (_liters4 / 1000) * _price4;
            assert(result[0].eq(expectedResult), "The price was not correct");
        });

        it("should estimate price for second voucher in same month", async function () {
            await WaterVoucherContract.purchaseVoucher(_voucherId1, _householdMeter, _liters1, {
                from: _admin1
            });

            let result = await PriceEstimatorContract.estimate(_householdMeter, _liters1);
            let expectedResult = (_liters1 / 1000) * _price2;
            assert(result[0].eq(expectedResult), "The price was not correct");
        });

        // TODO Write more tests
        // require(_meter != address(0));
        // require(_liters > 1000);
    });

    // TODO Write more test for
    // function setHouseholdMetersContract
    // function setWaterVouchersContract
    // function getCurrentMonthLiters
});