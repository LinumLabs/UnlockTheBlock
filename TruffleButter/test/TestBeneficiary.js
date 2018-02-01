var NGO = artifacts.require("./NGO.sol");
const assertRevert = require('./helpers/assertRevert')

contract('NGO', function (accounts) {
    let ngo = null;
    beforeEach(async () => {
        ngo = await NGO.new(100000);
    })

    describe('Testing beneficiary', () => {

        it("should add a beneficiary", async () => {
            await ngo.addBeneficiary("0xf17f52151EbEF6C7334FAD080c5704D77216b732", "passport1");

            const x = await ngo.findBeneficiary("0xf17f52151EbEF6C7334FAD080c5704D77216b732");
            assert.equal(x[0], "0xf17f52151EbEF6C7334FAD080c5704D77216b732".toLowerCase(), "address does not match of added Beneficiary");
            assert.equal(x[1], "passport1", "Passport doesn't match")
            assert.equal(x[2], 0, "Token balance must be zero")
        });

        it('should remove a valid beneficiary', async () => {
            await ngo.addBeneficiary("0xf17f52151EbEF6C7334FAD080c5704D77216b732", "passport1");
            await ngo.removeBeneficiary("0xf17f52151EbEF6C7334FAD080c5704D77216b732");
            const ben = await ngo.findBeneficiary("0xf17f52151EbEF6C7334FAD080c5704D77216b732");
            assert.equal(ben[0], 0, "address does not match of added merchant");
        })
    });
});