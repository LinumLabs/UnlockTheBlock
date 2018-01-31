const HouseholdMeters = artifacts.require("./HouseholdMeters.sol");
const util = require('./util');
const expectThrow = util.expectThrow;

contract('HouseholdMeters', function (accounts) {
    const _owner = accounts[0];
    const _notOwner = accounts[1];

    const _householdMembers = 4;
    const _householdMembersUpdate = 6;

    const _householdMeter = "0x638cdecbdb9af6f7bc9b9415633fb42be0f89ad8";
    const _householdMeterUpdate = "0x638cdecbdb9af6f7bc9b9415633fb42be0f89ad9";

    const _admin1 = accounts[2];
    const _admin2 = accounts[3];

    let HouseholdMetersContract;

    describe("Add admin", () => {
        beforeEach(async function () {
            HouseholdMetersContract = await HouseholdMeters.new({
                from: _owner
            });
        });

        it("should add new admin to the contract", async function () {
            let result = await HouseholdMetersContract.addAdmin(_admin1);
            assert.isTrue(Boolean(result.receipt.status), "The admin was not added successfully");
        });

        // TODO Write more tests
        // Add second admin
        // Should throw when with address 0
        // Should throw when called not from owner
        // Should check if event is emited

        it("should throw if adding same admin twice", async function () {
            let result = await HouseholdMetersContract.addAdmin(_admin1);
            await expectThrow(HouseholdMetersContract.addAdmin(_admin1));
        });
    });

    describe("Remove admin", () => {
        beforeEach(async function () {
            HouseholdMetersContract = await HouseholdMeters.new({
                from: _owner
            });
            let result = await HouseholdMetersContract.addAdmin(_admin1);
        });

        it("should add new admin to the contract", async function () {
            let result = await HouseholdMetersContract.removeAdmin(_admin1);
            assert.isTrue(Boolean(result.receipt.status), "The admin was not removed successfully");
        });

        // TODO Write more tests
        // Should throw when with address 0
        // Should throw when called not from owner
        // Should check if event is emited

        it("should throw if trying to remove not existing admin", async function () {
            let result = await HouseholdMetersContract.removeAdmin(_admin1);
            await expectThrow(HouseholdMetersContract.removeAdmin(_admin1));
        });
    });

    describe("Add household meter", () => {
        beforeEach(async function () {
            HouseholdMetersContract = await HouseholdMeters.new({
                from: _owner
            });
            await HouseholdMetersContract.addAdmin(_admin1);
        });

        it("should add new household meter to the contract", async function () {
            let result = await HouseholdMetersContract.addHouseholdMeter(_householdMeter, _householdMembers, {
                from: _admin1
            });
            assert.isTrue(Boolean(result.receipt.status), "The meter was not added successfully");
        });

        it("should throw if trying to add existing meter", async function () {
            await HouseholdMetersContract.addHouseholdMeter(_householdMeter, _householdMembers, {
                from: _admin1
            });
            await expectThrow(HouseholdMetersContract.addHouseholdMeter(_householdMeter, _householdMembers, {
                from: _admin1
            }));
        });

        // TODO Write more tests
        // Create Get function and test if the information is correctly stored
        // Should throw when with address 0
        // Should throw when with members count is 0
        // Should throw when called not from admin
        // Should check if event is emited
    });

    describe("Remove household meter", () => {
        beforeEach(async function () {
            HouseholdMetersContract = await HouseholdMeters.new({
                from: _owner
            });
            await HouseholdMetersContract.addAdmin(_admin1);
            await HouseholdMetersContract.addHouseholdMeter(_householdMeter, _householdMembers, {
                from: _admin1
            });
        });

        it("should remove a household meter from the contract", async function () {
            let result = await HouseholdMetersContract.removeHouseholdMeter(_householdMeter, {
                from: _admin1
            });
            assert.isTrue(Boolean(result.receipt.status), "The meter was not removed successfully");
        });

        it("should throw if trying to remove not existing meter", async function () {
            await HouseholdMetersContract.removeHouseholdMeter(_householdMeter, {
                from: _admin1
            });
            await expectThrow(HouseholdMetersContract.removeHouseholdMeter(_householdMeter, {
                from: _admin1
            }));
        });

        // TODO Write more tests
        // Create Get function and test if the information is correctly stored
        // Should throw when with address 0
        // Should throw when with members count is 0
        // Should throw when called not from admin
        // Should check if event is emited
    });
});