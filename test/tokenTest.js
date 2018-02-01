const ERC721Token  = artifacts.require('../contracts/ERC721Token.sol')


contract('ERC721Token', function (accounts) {
    let token;
    const farmer = accounts[0];
    const escrow = accounts[1];
    //const buyer = accounts[1]

    
    before('setup contract for each test', async function () {
       token = await ERC721Token.deployed();
    });


    it('create new farmer and mint token', async function () {
        await token.newFarmer(farmer);
        await token._mint(farmer, 1234);
        const owner = await token.ownerOf(1234);
        assert.equal(owner, farmer);
    });

    it('testing transfer token transfer ',  async function (){
        await token.newFarmer(farmer);
        await token._mint(farmer, 1234);   
        //await token.approve(escrow,1234);
        await token.approve(escrow,1234, {from:farmer});
        await token.takeOwnership(1234, {from:escrow});
        const owner = await token.ownerOf(1234);
        assert.equal(owner, escrow );
    });

})