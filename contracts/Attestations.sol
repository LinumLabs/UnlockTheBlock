pragma solidity ^0.4.17;

contract Attestation {

  address private owner;
  Organisation[] public orgs;
  //we need to figure out how one can return a filtered list of claims for someone.
  Claim[] public claims;

  event OrganisationAdded(address indexed orgAddress, string uportId, string name);
  event ClaimAdded(address indexed organisation, address indexed claimant);

  struct Organisation {
    bool verified;
    string name;
    string registrationNumber;
    string uportId;
    address owner;
  }

  //too much information, will reduce later once we know what isn't useful.
  struct Claim {
    string name;
    address organisation;
    bool verified;
    bool isPublic;
    address claimant;
    string claimantUportId;
    uint added;
    string claimantName;
  }

  function addClaim(string name, string claimantName, address organisation, address claimant, bool isPublic, string claimantUportId) public returns (uint claimIndex) {
    Claim memory claim;

    claim.name = name;
    claim.organisation = organisation;
    claim.verified = false;//make sure it's false
    claim.isPublic = isPublic;
    claim.claimant = claimant;
    claim.claimantUportId = claimantUportId;
    claim.added = block.timestamp;
    claim.claimantName = claimantName;

    claimIndex = claims.push(claim)-1;

    ClaimAdded(organisation, claimant);

    return claimIndex;
  }

  function Attestation() public {
    owner = msg.sender;
  }

  function addOrganisation(string uportId, string name,string registrationNumber) public returns (uint orgIndex){
    //require(!organisations[msg.sender]);

    Organisation memory org;

    org.verified=false;
    org.name= name;
    org.registrationNumber= registrationNumber;
    org.uportId = uportId;
    org.owner = msg.sender;

    orgIndex = orgs.push(org)-1;

    OrganisationAdded(msg.sender, uportId, name);

    return orgIndex;

  }

  function verifyClaim(uint claimIndex) public {
    Claim claim = claims[claimIndex];

    require(msg.sender == claim.organisation);
    require(claim.verified == false);

    claim.verified = true;
  }

  //make this protected by either the claimant or public or organisation

  /* function getClaims(address claimant) returns (uint[10]){ */
  /*   uint[] memory claimIds = new uint[]; */
  /*   for (uint i =0; i < getClaimsCount(); i++){ */
  /*     if (claims[i].claimant == claimant){ */
  /*       claimIds.push(i); */
  /*     } */
  /*   } */

  /*   return claimIds; */
  /* } */

  function getOrgsCount() public constant returns(uint orgsCount) {
    return orgs.length;
  }

  function getClaimsCount() public constant returns(uint claimsCount) {
    return claims.length;
  }
}
