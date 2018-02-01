var Marketplace = artifacts.require('./Marketplace.sol');

contract('Marketplace', function(accounts) {

  var provider;
  var requestor;

  before(async function(){
    provider = accounts[0];
    requestor = accounts[1];

    contract = await Marketplace.deployed();
  });

  it("Contract is deployed", async function() {
    assert(contract);
  });


  it("Can create a job offer", async () => {

    const uportId = "2os9YQ6FPrTqsWDrMpDxCa6BrPd5x4Mh18p";
    var name = "T";
    var registrationNumber = "12";

    await contract.addJobOffer("Job Title", "Awesome Job Offer", "Rise", web3.toWei(1,'ether'), "123");

    var jobOfferCount = await contract.getJobsCount();

    assert(jobOfferCount.toNumber() === 1);

    var jobOffer = await contract.jobs.call(0);

    assert(jobOffer);
  });

  it("Can Request a job", async () => {

    await contract.requestJob(0, {from: requestor});

    var jobOffer = await contract.jobs.call(0, {from: requestor});
  });

  it("Cannot request a job on a job with pending offer", async () => {
    await contract.requestJob(0, {from: accounts[2]});

    var jobOffer = await contract.jobs.call(0);

    assert(jobOffer[8] == requestor);
  });

  it("Can Accept Job if right amount is sent", async () => {

    await contract.acceptJob(0, {from: provider, value: web3.toWei(1,'ether').toString()});

    var jobOffer = await contract.jobs.call(0, {from: requestor});
    assert(jobOffer[5] == "Accepted");
  });

  it("Can finish job", async () => {
    await contract.finishJob(0);

    var jobOffer = await contract.jobs.call(0, {from: requestor});
    assert(jobOffer[5] == "Completed");
  });
});

