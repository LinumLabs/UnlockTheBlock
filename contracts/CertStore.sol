pragma solidity ^0.4.17;

import "./Ownable.sol";

contract CertStore is Ownable {

  // Events
  event LogProofSaved(bytes32 proof, string universityCode, string studentID, string certID, string course, uint _time);
  event LogAddUniversity(address _university, uint _time);
  event LogAddUser(address _user, uint _time);

  address[10] public universities; // Increase this to 10000 before going live in production
  uint public universitiesCount;

  address[10] public users;
  uint public usersCount;

  struct Cert {
    string universityCode;
    string studentID;
    string certID;
    string course;
    bool initialized;
  }

  mapping (bytes32 => Cert) public proofs;
  mapping (address => bool) public accountableIntitutions;

  function CertStore() public {
    // Wrap this in an "IF ENV == DEV //

    // ADD YOUR OWN ADDRESSES IN THE SECTION BELOW:
    // Add Ganache's first account to the AI list for testing via solidity tests
    accountableIntitutions[0xF6B39cE8221a48A0cecA0B4D375682C622e1829B] = true;

    // Create the Mock Universities
    universities[0] = 0xAFB2Ddcf3a047C4849Bb0971B424Cd62Cfb4eA31; // UJ
    accountableIntitutions[0xAFB2Ddcf3a047C4849Bb0971B424Cd62Cfb4eA31] = true;

    universities[1] = 0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef; // UCT
    accountableIntitutions[0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef] = true;

    universities[2] = 0x74d6D051B6004C99FFc932540bb5C06F7afFBa62; // UP
    accountableIntitutions[0x74d6D051B6004C99FFc932540bb5C06F7afFBa62] = true;

    universitiesCount = 3;

    // Create the mock Users - THESE AREN'T NEEDED UNTIL SERVICE GETS MONITISED
    users[0] = 0x217735C6cF3C09037EAB60f7C4fAD2C197994D7D;
    users[1] = 0xe292c3F3f11F63A33FDA8Ee168d3797E5E7A16c5;
    users[2] = 0xA00791Da14b623D56D4c5598eAF478c7C4A5945a;
    users[3] = 0xD067220c87d629110EBA04EC5d00272b2139B954;
    usersCount = 4;

    // DUMMY PROOF
    storeProof("UJ", "8205215089084", "ABCD1234", "BSC");

  }

  // Admin can add Universities
  function addUniversity(address _universityAddress) public onlyOwner returns (bool returnCode) {
    universities[universitiesCount] = _universityAddress;
    accountableIntitutions[_universityAddress] = true;
    universitiesCount++;

    LogAddUniversity(_universityAddress, now);

    return true;
  }

  // Admin can add Users
  function addUser(address _usersAddress) public onlyOwner returns (bool returnCode) {
    users[usersCount] = _usersAddress;
    usersCount++;

    LogAddUser(_usersAddress, now);

    return true;
  }
  
  function storeProof(string universityCode, string studentID, string certID, string course) public returns (bool returnCode) {
    
    require(accountableIntitutions[msg.sender]);

    Cert memory cert = Cert(universityCode, studentID, certID, course, true);
    bytes32 proof = keccak256(universityCode, studentID, certID, course);

    proofs[proof] = cert;

    LogProofSaved(proof, universityCode, studentID, certID, course, now);

    return true;

  }

  function verifyProof(string universityCode, string studentID, string certID, string course) public constant returns (bool returnCode) {

    bytes32 proof = keccak256(universityCode, studentID, certID, course);

    if (proofs[proof].initialized) {
      return true;
    } 

    return false;

  }

  function verifyProof(bytes32 proof) public view returns (bool returnCode) {

    if (proofs[proof].initialized) {
      return true;
    } 

    return false;

  }
  
  // Return universities list 
  function getUniversities() public view returns (address[10]) {
    return universities;
  }

  // Return users list 
  function getUsers() public view returns (address[10]) {
    return users;
  }

  /**
   * @dev Throws if called by any account other than the owner.
   * NOT CURRENTLY USED - Meant for storeProof
   */
  modifier onlyAccountableIntitutions() {
    require(accountableIntitutions[msg.sender] = true);
    _;
  }

}
