const TokenSellerFactory = artifacts.require('./TokenSellerFactory.sol');
const TokenSeller = artifacts.require('./TokenSeller');
const Token = artifacts.require('./H2ICO');
const Controller = artifacts.require('./Controller');

contract('TokenSeller',function(accounts) {
    let mTokenSeller;
    let mToken;
    //TokenSeller(address _asset, uint _sellPrice, uint _units, bool _sellsTokens)
    let asset;
    let tokenSellerAddress;
    var sellPrice;//sell price in ether for lot
    var units;
    var sellsTokens;
    var otherAsset;
    let mControl

    beforeEach(async () => {
        mToken = await Token.new();
        asset = await mToken.address;
        sellPrice = 10;
        units = 100;
        sellsTokens = true;
        mTokenSeller = await TokenSeller.new(asset, sellPrice, units, sellsTokens);
        tokenSellerAddress = await mTokenSeller.address;
        mControl = await Controller.new();
        await mControl.setTokenAddr(asset);
        await mControl.setUserWaterLimit(units,{from: accounts[0]});
    });

    it("All variables should be equal to the values past in by the constructor", async function() {
        let mUnits;
        mUnits = await mTokenSeller.units();
        let mAsset;
        mAsset = await mTokenSeller.asset();
        assert.equal(mUnits.toNumber(),units,"units should match  constructor parameter");
        assert.equal(mAsset,asset,"asset should match token address in  constructor parameter");
        assert.notEqual(mUnits,units-1,"units should not match  constructor parameter");
        assert.notEqual(mTokenSeller.sellsTokens(),false,"sellPrice should not match  constructor parameter");
        assert.notEqual(mAsset,accounts[1],"asset should not match token address in  constructor parameter");
        assert.notEqual(mAsset,0x0,"asset should not match token address in constructor parameter");        
    });

    it("Contract must be closed for sale", async function() {
        mTokenSeller.activate(false);
        let v = await mTokenSeller.sellsTokens();
        assert.equal(v,false,"contract is still active");       
    });
});