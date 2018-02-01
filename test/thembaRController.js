const ThembaRController = artifacts.require("./ThembaRController.sol");
const ThembaR = artifacts.require("./ThembaR.sol");
const Agreement = artifacts.require("./Agreement.sol");
const BigNumber = web3.BigNumber;
const assertRevert = require("./helpers/assertRevert");

contract('ThembaRController', function ([owner, discovery, mnb]) {

  let thembaRController
  beforeEach('setup contract for each test', async function () {
    thembaRController = await ThembaRController.new()
})

    it('adding two new token to the list1', async function () {
        assert.notEqual("The array is not empty and it should be",(await thembaRController.getAllTokens() == []), false)
        await thembaRController.createBizToken(discovery, "Vatality","VP");//creating a new vitality token instance
        await thembaRController.createBizToken(mnb, "Mugg and bean","MB");//creating a new MnB token instance
        var tokenArray = await thembaRController.getAllTokens.call();//Get token array
        assert.notEqual(tokenArray[0], undefined, "token array is empty aftering adding both parties to the array");

        //making sure that the token array actually contains two items
        //assert.equal(true, (tokenArray.length == 2), "there should be two items in the token, namely Mnb and Vitality");

        //making sure the items in the array is in fact the items created.
        //var dd = await ThembaR.at(tokenArray[0]);
        //assert.equal( (await dd.getOwner()), discovery, "the first token is not Vitality");

        //var mm = await ThembaR.at(tokenArray[1]);
       // assert.equal( (await mm.getOwner()), mnb, "the second token is not MnB");

        // console.log( web3.utils.fromWei(discovery, "ether" ).toNumber());
        //  console.log((await mm.getBalanceReloaded(discovery).c[0]));
         //(mm.getBalanceReloaded(discovery).should.be.bignumber.equal(0));

    //    await thembaR.transferFrom(discovery,owner, 500, {from: discovery})
    //     console.log(await thembaR.getBalanceReloaded(owner))
    //    // console.log(await thembaR.balanceOf(owner).valueOf())
    //     assert.notEqual((await thembaRController.getAllTokens() == []), true)
     })
    it('Get signed partners', async function () {//getSignedPartners
        await thembaRController.createBizToken(discovery, "Vatality","VP")//Create vitality token
        await thembaRController.createBizToken(mnb, "Mugg and bean","MB")//Create MnB token
        var tokenArray = await thembaRController.getAllTokens.call();//Get token array
        console.log(tokenArray);
        vatalityToken = await ThembaR.at(tokenArray[0]);//Get vitality token JS abstraction
        mnrToken = await ThembaR.at(tokenArray[1]);//Get MnB token JS abstraction

       console.log("before signing",await vatalityToken.getSignedPartners()); 

        await vatalityToken.addAgreement(mnb, 2, 1, 3, true);//Create new agreement
        list = await vatalityToken.getAgreementList.call(); 
        agreementAddress = list[list.length-1];//Get new agreement's address
        agreementContract = await Agreement.at(agreementAddress);//Get JS abstraction of agreement
        console.log(await agreementContract.getInfo.call());//Print agreement state

        mnrToken.signAgreement(agreementAddress);//MnB signs agreement
        console.log(await agreementContract.getInfo.call());//Print post signature state

        console.log("after signing",await vatalityToken.getSignedPartners()); 
        assert.equal(true,true)

    })
    
    it('Get getPendingAgreements', async function () {//getSignedPartners
        await thembaRController.createBizToken(discovery, "Vatality","VP")//Create vitality token
        await thembaRController.createBizToken(mnb, "Mugg and bean","MB")//Create MnB token
        var tokenArray = await thembaRController.getAllTokens.call();//Get token array
        console.log(tokenArray);
        vatalityToken = await ThembaR.at(tokenArray[0]);//Get vitality token JS abstraction
        mnrToken = await ThembaR.at(tokenArray[1]);//Get MnB token JS abstraction

        await vatalityToken.addAgreement(mnb, 2, 1, 3, true);//Create new agreement
        list = await vatalityToken.getAgreementList.call(); 
        agreementAddress = list[list.length-1];//Get new agreement's address
        agreementContract = await Agreement.at(agreementAddress);//Get JS abstraction of agreement
        console.log("before signing",await vatalityToken.getSignerUnSignedAgreements.call(mnb)); 
        console.log(await agreementContract.getInfo.call());//Print agreement state

        mnrToken.signAgreement(agreementAddress);//MnB signs agreement
        console.log(await agreementContract.getInfo.call());//Print post signature state

        console.log("after signing",await vatalityToken.getSignerUnSignedAgreements.call(mnb));  

    })
    it('create agreement and port from customer vitality to mnb', async function () {
        await thembaRController.createBizToken(discovery, "Vatality","VP")//Create vitality token
        await thembaRController.createBizToken(mnb, "Mugg and bean","MB")//Create MnB token
        var tokenArray = await thembaRController.getAllTokens();//Get token array

         vatalityToken = await ThembaR.at(tokenArray[0]);//Get vitality token JS abstraction
         mnrToken = await ThembaR.at(tokenArray[1]);//Get MnB token JS abstraction

        // Print out state of token accounts
         console.log("Discovery balance of VP: ",await vatalityToken.getBalanceReloaded(discovery));//Discovery balance of VP
         console.log("MnB balance of VP",await vatalityToken.getBalanceReloaded(mnb));//MnB balance of VP
         console.log("Customer balance of VP",await vatalityToken.getBalanceReloaded(owner)); //Customer balance of VP
 
         console.log("MnB balance of MB",await mnrToken.getBalanceReloaded(mnb));//MnB balance of MB
         console.log("Discovery balance of MB",await mnrToken.getBalanceReloaded(discovery));//Discovery balance of MB
         console.log("Customer balance of MB",await mnrToken.getBalanceReloaded(owner));//Customer balance of MB
         
        await vatalityToken.transferFrom(discovery,owner, 500, {from: discovery})
        await mnrToken.transferFrom(mnb,owner, 900, {from: discovery})

        // Print out state of token accounts
         console.log("Discovery balance of VP: ",await vatalityToken.getBalanceReloaded(discovery));//Discovery balance of VP
         console.log("MnB balance of VP",await vatalityToken.getBalanceReloaded(mnb));//MnB balance of VP
         console.log("Customer balance of VP",await vatalityToken.getBalanceReloaded(owner)); //Customer balance of VP
 
         console.log("MnB balance of MB",await mnrToken.getBalanceReloaded(mnb));//MnB balance of MB
         console.log("Discovery balance of MB",await mnrToken.getBalanceReloaded(discovery));//Discovery balance of MB
         console.log("Customer balance of MB",await mnrToken.getBalanceReloaded(owner));//Customer balance of MB

        

        await vatalityToken.addAgreement(mnb, 2, 1, 3, true);//Create new agreement
        list = await vatalityToken.getAgreementList.call(); 
        agreementAddress = list[list.length-1];//Get new agreement's address
        agreementContract = await Agreement.at(agreementAddress);//Get JS abstraction of agreement
        console.log(await agreementContract.getInfo.call());//Print agreement state

    
        mnrToken.signAgreement(agreementAddress);//MnB signs agreement
        console.log(await agreementContract.getInfo.call());//Print post signature state

        console.log("Before the big moment")

        // Print out state of token accounts
        console.log("Discovery balance of VP: ",await vatalityToken.getBalanceReloaded(discovery));//Discovery balance of VP
        console.log("MnB balance of VP",await vatalityToken.getBalanceReloaded(mnb));//MnB balance of VP
        console.log("Customer balance of VP",await vatalityToken.getBalanceReloaded(owner)); //Customer balance of VP

        console.log("MnB balance of MB",await mnrToken.getBalanceReloaded(mnb));//MnB balance of MB
        console.log("Discovery balance of MB",await mnrToken.getBalanceReloaded(discovery));//Discovery balance of MB
        console.log("Customer balance of MB",await mnrToken.getBalanceReloaded(owner));//Customer balance of MB
    
        console.log("herer comes the big moment")
        await agreementContract.port(owner, tokenArray[0], 400, agreementAddress);

        // Print out state of token accounts
        console.log("Discovery balance of VP: ",await vatalityToken.getBalanceReloaded(discovery));//Discovery balance of VP
        console.log("MnB balance of VP",await vatalityToken.getBalanceReloaded(mnb));//MnB balance of VP
        console.log("Customer balance of VP",await vatalityToken.getBalanceReloaded(owner)); //Customer balance of VP

        console.log("MnB balance of MB",await mnrToken.getBalanceReloaded(mnb));//MnB balance of MB
        console.log("Discovery balance of MB",await mnrToken.getBalanceReloaded(discovery));//Discovery balance of MB
        console.log("Customer balance of MB",await mnrToken.getBalanceReloaded(owner));//Customer balance of MB

    //     assert.notEqual((await thembaRController.getAllTokens() == []), true)
    })
  
})
