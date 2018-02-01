var SifCoin = artifacts.require("./SifCoin.sol");

contract('SifCoin', function (accounts) {
    let sifCoin = null;
    beforeEach(async () => {
        sifCoin = await SifCoin.new();
    })

    //smoke tests, just making sure our contract works
    describe('Testing SifCoin', () => {

        it("should be called sifCoin", async () => {
            let name = await sifCoin.name();
            assert.equal("SifCoin", name, "Name doesn't match");
            
        });

        it("initial supply must be zero", async () => {
            let supply = await sifCoin.totalSupply();
            assert.equal(0, supply, "Initial supply should be zero");
            
        });
    });
});