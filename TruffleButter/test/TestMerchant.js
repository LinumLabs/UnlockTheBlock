var Bank = artifacts.require("./Bank.sol");
const assertRevert = require('./helpers/assertRevert')


contract('Bank', function (accounts) {
    let bank = null;
    beforeEach(async () => {
        bank = await Bank.new(100000);
    })

    describe('Testing Merchants', () => {
        it('should add a valid merchant', async () => {
            await bank.addMerchant("0x627306090abaB3A6e1400e9345bC60c78a8BEf57", "BobSupplier", "Water;Apples;rice");
            const merchant = await bank.findMerchant("0x627306090abaB3A6e1400e9345bC60c78a8BEf57"); 
            assert.equal(merchant[0], "0x627306090abaB3A6e1400e9345bC60c78a8BEf57".toLowerCase(), "address does not match of added merchant");
            assert.equal(merchant[1], "BobSupplier", "type of goods does not match of added merchant");
            assert.equal(merchant[2], "Water;Apples;rice", "type of goods does not match of added merchant");
        })
    });

    describe('Testing Merchants', () => {
        it('should revert if not a valid merchant', async () => {
            await assertRevert(bank.addMerchant("", "BobSupplier", "Water;Apples;rice"));
            const merchant = await bank.findMerchant("");
            assert.equal(merchant[0], 0, "should not have an address");
            assert.equal(merchant[1], "", "should not have a name");
            assert.equal(merchant[2], "", "should not have types of goods");
        })
    });

    describe('Testing Merchants', () => {
        it('should revert if a duplicate merchant', async () => {
            await bank.addMerchant("0x627306090abaB3A6e1400e9345bC60c78a8BEf57", "BobSupplier", "Water;Apples;rice");
            await assertRevert(bank.addMerchant("0x627306090abaB3A6e1400e9345bC60c78a8BEf57", "BobSupplier", "Water;Apples;rice"));
            const merchant = await bank.findMerchant("0x627306090abaB3A6e1400e9345bC60c78a8BEf57");
            assert.equal(merchant[0], "0x627306090abaB3A6e1400e9345bC60c78a8BEf57".toLowerCase(), "address does not match of added merchant");
            assert.equal(merchant[1], "BobSupplier", "type of goods does not match of added merchant");
            assert.equal(merchant[2], "Water;Apples;rice", "type of goods does not match of added merchant");
        })
    });



    describe('Testing Merchants', () => {
        it('should remove a valid merchant', async () => {
            await bank.addMerchant("0x627306090abaB3A6e1400e9345bC60c78a8BEf57", "BobSupplier", "Water;Apples;rice");
            await bank.removeMerchant("0x627306090abaB3A6e1400e9345bC60c78a8BEf57");
            const merchant = await bank.findMerchant("0x627306090abaB3A6e1400e9345bC60c78a8BEf57");
            assert.equal(merchant[0], 0, "address does not match of added merchant");
            assert.equal(merchant[1], "", "type of goods does not match of added merchant");
            assert.equal(merchant[2], "", "type of goods does not match of added merchant");
        })
    });

    describe('Testing Merchants', () => {
        it('should revert if merchant does not exist', async () => {
            await assertRevert(bank.removeMerchant(""));
            const merchant = await bank.findMerchant("");
            assert.equal(merchant[0], 0, "should not have an address");
            assert.equal(merchant[1], "", "should not have a name");
            assert.equal(merchant[2], "", "should not have types of goods");
        })
    });
    

    
});
