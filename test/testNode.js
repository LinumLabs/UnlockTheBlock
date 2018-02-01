<<<<<<< HEAD
var HouseholdContract = artifacts.require('./HouseholdContract.sol');
var HouseholdLibrary = artifacts.require('./HouseholdLibrary.sol');


contract('HouseholdContract', function(accounts) {
=======
var Node = artifacts.require('./Node.sol');

contract('Node', function(accounts) {
>>>>>>> develop
  let contract;
  const parent = accounts[0];

  before(async function(){
<<<<<<< HEAD
    contract = await HouseholdContract.deployed();
  });

  it("HouseholdContract contract is deployed.", async function() {
    assert(contract);
  });



=======
    contract = await Node.deployed();
  });

  it("Node contract is deployed.", async function() {
    assert(contract);
  });

  //Dit is hoe die goed moet wees!!! Net iets komma iets... await contract.getPrice(5)
  //Hy return die hele obj, wil net die een veld he...hulle het toe gehelp...net chaos.
  it("Recieving correct price from node.", async function() {
    var num = 2;
    const price = await contract.getPrice(num);
    //price = price.logs[0].args.add.toNumber();
    assert.equal(price.logs[0].args.add.toNumber() == num, true);
  });

  it("Credits updating correctly.", async function() {
    var num = 5;
    const credits = await contract.updateCredits(false);
    var out = credits.logs[0].args.cred.toNumber();
    assert(out == num, true);

    console.log("Toets of die ding werk.");
  });
>>>>>>> develop
});
