var Attestation = artifacts.require('./Attestation.sol');

contract('Attestation', function(accounts) {

  var org;
  var claimant;
  var contract;
  before(async function(){
    org = accounts[0];
    claimant = accounts[1];

    contract = await Attestation.deployed();
  });

  it("Contract is deployed", async function() {
    assert(contract);
  });


  it("Can create an organisation", async () => {

    return new Promise((resolve,reject) =>{
      const uportId = "2os9YQ6FPrTqsWDrMpDxCa6BrPd5x4Mh18p";
      var name = "T";
      var registrationNumber = "12";

      var events = contract.OrganisationAdded([org, uportId], async (err, result) => {
        assert(result.args.orgAddress === accounts[0]);
        assert(result.args.uportId === uportId);
        assert(result.args.name === name);

        var orgsCount = await contract.getOrgsCount.call();

        assert(orgsCount.toNumber() === 1);

        events.stopWatching();

        resolve();
      });

      contract.addOrganisation(uportId, name, registrationNumber);
    });


  });


  it("Can add multiple orgs", async () => {

    const uportId = "2os9YQ6FPrTqsWDrMpDxCa6BrPd5x4Mh18p";
    var name = "T";
    var registrationNumber = "12";


    await contract.addOrganisation("org1", "org1", "1");

    var orgsCount = await contract.getOrgsCount.call();

    assert(orgsCount == 2);

    for (var i = 0; i < orgsCount.toNumber(); i++){
      var org = await contract.orgs.call(i);
      assert(org[1]);
    }

    org[0].name === "T";
    org[1].name === "org1";

  });

  it("Can add claim", async () => {
    var name = "Bachelors in Nonsense";
    var claimantName = "TestName";
    const uportId = "123";

    await contract.addClaim(name,claimantName, org, claimant, true, uportId);

    var orgsCount = await contract.getClaimsCount.call({from:claimant});

    assert(orgsCount == 1);

    var readClaim = await contract.claims.call(0);

    assert(readClaim[0] === name);
    assert(readClaim[1] === org);
    assert(readClaim[2] === false);
    assert(readClaim[3] === true);
    assert(readClaim[4] === claimant);
    assert(readClaim[5] === uportId);
    assert(readClaim[6] > 0);
    assert(readClaim[7] === claimantName);
  });


  it("Can verify a claim", async () => {
    await contract.verifyClaim(0, {from: org});
    var readClaim = await contract.claims.call(0);
    assert(readClaim[2] === true);

  });

  it("Cannot verify a claim if not the claims organisation", async () => {
    var name = "Claim2";
    const uportId = "123";
    var claimantName = "TestName";
    await contract.addClaim(name,claimantName, org, claimant, true, uportId);

    await contract.verifyClaim(0, {from: accounts[3]});

    var readClaim = await contract.claims.call(1);
    assert(readClaim[2] === false);

  });
});

