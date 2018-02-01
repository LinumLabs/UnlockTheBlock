pragma solidity ^0.4.17;

contract Marketplace {

  address owner;
  JobOffer[] public jobs;
  JobRequest[][] public jobRequests;
  //mapping (uint => JobRequest[]) public jobRequests;
  //mapping (uint => uint) jobRequestCount;

  event JobAdded(uint indexed id, string title);
  event JobAccepted(uint indexed id);
  event JobFinished(uint indexed id);

  struct JobRequest {
    address requestorAddress;
    string requestorName;
    string requestorUportId;
  }

  struct JobOffer {
    string title;
    string description;
    address provider;
    string providerName;
    string providerUportId;
    string status;
    uint created;
    uint paymentAmountInWei;
    address request;
  }

  function addJobOffer(string title, string description, string providerName, uint paymentAmountInWei, string providerUportId) public returns (uint jobIndex) {
    JobOffer memory jobOffer;

    jobOffer.providerName = providerName;
    jobOffer.provider = msg.sender;
    jobOffer.description = description;
    jobOffer.title = title;
    jobOffer.created = block.timestamp;
    jobOffer.status = "Created";
    jobOffer.providerUportId = providerUportId;
    jobOffer.paymentAmountInWei = paymentAmountInWei;

    jobIndex = jobs.push(jobOffer)-1;

    JobAdded(jobIndex, title);

    return jobIndex;
  }

  function requestJob(uint jobId) public {
    JobOffer job = jobs[jobId];

    require(job.request == 0x0000000000000000000000000000000000000000);

    job.request = msg.sender;
    job.status = "Pending Accept";

  }

  function acceptJob(uint jobId) public payable {
    JobOffer job = jobs[jobId];

    require(msg.value == job.paymentAmountInWei);
    require(job.request != 0x0000000000000000000000000000000000000000);

    job.request = msg.sender;
    job.status = "Accepted";
    JobAccepted(jobId);
  }

  function finishJob(uint jobId){
    JobOffer job = jobs[jobId];

    //require(StringUtils.equal(job.status,"Accepted"));
    require(job.request != 0x0000000000000000000000000000000000000000);

    job.request.transfer(job.paymentAmountInWei);
    job.status = "Completed";
    JobFinished(jobId);
  }

  function Marketplace() public {
    owner = msg.sender;
  }

  function getJobsCount() public constant returns(uint jobsCount) {
    return jobs.length;
  }
}
