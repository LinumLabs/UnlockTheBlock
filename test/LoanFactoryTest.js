const LoanFactory  = artifacts.require('../contracts/LoanFactory')

contract('LoanFactory', function (accounts) {
    //let token;
    let factory;
    const farmer = accounts[0];
    const escrow = accounts[1];
    //const buyer = accounts[1]

    beforeEach('setup contract for each test', async function () {
        //token = await ERC721Token2.deployed();
        
        factory = await LoanFactory.new();
        await factory.newFarmer(farmer);
        await factory._mint(farmer, 1234);
        // console.log(factory);
     });

    
    it('create loan application', async function () {
        
        const application = await factory.test(1234,farmer,6000,2000);
        //console.log(application.logs[0].args.applicationAddress)
        //const a 
        const farmer_internal = await factory.Applications(application.logs[0].args.applicationAddress);
        //const owner = await token.ownerOf(1234);
        assert.equal(farmer_internal,farmer);
    });

    /*it('buy loan application', async function () {
        
        const application = await factory.test(1234,farmer,6000,2000);
        console.log( application.logs[0].args.applicationAddress)
        //const a 
        const farmer_internal = await factory.Applications(application.logs[0].args.applicationAddress);
        //const owner = await token.ownerOf(1234);
        //_tokenId = application.logs[0].args.applicationAddress).tokenId();
        assert.equal(_tokenId,1234);
    });*/

})