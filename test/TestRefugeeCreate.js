var RefugeeRegister = artifacts.require('./RefugeeRegister.sol');

contract ('RefugeeRegister', function(accounts) {
    let contract;
    const expectedID = "bhuiokmnjhge";
    const expectedPublicKey = "IYTE&^%EC*^%E&^SREDID&^$";   
     
    // const refugee = accounts[0];

    before (async function()  {
        contract = await RefugeeRegister.deployed();
    });


    it("Contract is deployed", async function() {
        assert(contract);
    });    


    it("Refugee profile successfully created with all details populated", async function() {
        var refugeeId
        await contract.createRefugee(expectedID, expectedPublicKey);
        refugeeId = await contract.getRefugeeId.call();
        assert.equal(expectedID, refugeeId, "Incorrect ID returned");
    });
});



// it("Refugee profile successfully linked to private key", async function() {
//     assert(new Date().getTime() < new Date("2018-01-31").getTime());
// });

// it("Refugee profile not created if mandatory fields are missing", async function() {
//     assert(new Date().getTime() < new Date("2018-01-31").getTime());
// });

// it("Refugee profile not created if active card is linked to their ID", async function() {
//     assert(new Date().getTime() < new Date("2018-01-31").getTime());
// });

// it("Inital balance loaded to new account", async function() {
//     assert(new Date().getTime() < new Date("2018-01-31").getTime());
// });

// it("Minor linked to household account", async function() {
//     assert(new Date().getTime() < new Date("2018-01-31").getTime());
// });

// });