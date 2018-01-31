pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";


contract HouseholdMeters is Ownable {
    struct Household {
        uint16 householdMembers;
        uint256 householdMetersAddressesIndex;
        bool isActive;
    }

    address[] public householdMetersAddresses;
    mapping(address => Household) public householdMeters;

    struct Admin {
        bool isActive;
        uint256 adminsArrayIndex;
    }
    address[] public administrators;
    mapping(address => Admin) public whiteListedAdmins;

    event LogAddAdmin(address _admin);
    event LogRemoveAdmin(address _admin);
    event LogAddHouseholdMeter(address _meter, uint16 _householdMembers, address _admin);
    event LogRemoveHouseholdMeter(address _meter, address _admin);

    modifier onlyAdmin() {
        require(whiteListedAdmins[msg.sender].isActive);
        _;
    }

    modifier onlyNotExistingAdmin(address _admin) {
        require(!whiteListedAdmins[_admin].isActive);
        _;
    }

    modifier onlyExistingAdmin(address _admin) {
        require(whiteListedAdmins[_admin].isActive);
        _;
    }

    modifier onlyNotExistingMeter(address _meter) {
        require(!householdMeters[_meter].isActive);
        _;
    }

    modifier onlyExistingMeter(address _meter) {
        require(householdMeters[_meter].isActive);
        _;
    }

    function HouseholdMeters() public {
        
        // This is only for demo purposes - DO NOT USE IT IN PRODUCTION
        // ------------------------------------------------------------
        whiteListedAdmins[msg.sender] = Admin({
            isActive: true,
            adminsArrayIndex: administrators.length
        });
        administrators.push(msg.sender);

        householdMeters[address(0xf17f52151EbEF6C7334FAD080c5704D77216b732)] = Household({
                householdMembers: 4,
                householdMetersAddressesIndex: householdMetersAddresses.length,
                isActive: true
            });
        householdMetersAddresses.push(address(0xf17f52151EbEF6C7334FAD080c5704D77216b732));
        // ------------------------------------------------------------
    }

    function addAdmin(address _newAdmin) public onlyOwner onlyNotExistingAdmin(_newAdmin) returns(bool success) {
        require(_newAdmin != address(0));

        whiteListedAdmins[_newAdmin] = Admin({
                isActive: true,
                adminsArrayIndex: administrators.length
            });
        administrators.push(_newAdmin);

        LogAddAdmin(_newAdmin);

        return true;
    }

    function removeAdmin(address _adminToRemove) public onlyOwner onlyExistingAdmin(_adminToRemove) returns(bool success) {
        require(_adminToRemove != address(0));
        
        address lastId = administrators[administrators.length-1];
        administrators[whiteListedAdmins[_adminToRemove].adminsArrayIndex] = lastId;
        administrators.length--;
        whiteListedAdmins[lastId].adminsArrayIndex = whiteListedAdmins[_adminToRemove].adminsArrayIndex;
        whiteListedAdmins[_adminToRemove].isActive = false;

        LogRemoveAdmin(_adminToRemove);

        return true;
    }

    function getHouseholdMembersCount(address _meter) 
        public view returns(uint16 membersCount) 
    {
        return householdMeters[_meter].householdMembers;
    }

    function addHouseholdMeter(address _meter, uint16 _householdMembers) 
        public onlyAdmin onlyNotExistingMeter(_meter) returns(bool success) 
    {
        require(_meter != address(0));
        require(_householdMembers > 0);

        householdMeters[_meter] = Household({
                householdMembers: _householdMembers,
                householdMetersAddressesIndex: householdMetersAddresses.length,
                isActive: true
            });
        householdMetersAddresses.push(_meter);
        
        LogAddHouseholdMeter(_meter, _householdMembers, msg.sender);

        return true;
    }

    function removeHouseholdMeter(address _meter) 
        public onlyAdmin onlyExistingMeter(_meter) returns(bool success) 
    {
        require(_meter != address(0));
        
        address lastId = householdMetersAddresses[householdMetersAddresses.length-1];
        householdMetersAddresses[householdMeters[_meter].householdMetersAddressesIndex] = lastId;
        householdMetersAddresses.length--;
        householdMeters[lastId].householdMetersAddressesIndex = householdMeters[_meter].householdMetersAddressesIndex;
        householdMeters[_meter].isActive = false;

        LogRemoveHouseholdMeter(_meter, msg.sender);

        return true;
    }

    function updateHousehold(address _meter, uint16 _householdMembers) public onlyAdmin returns(bool success) {
        require(_meter != address(0));
        require(_householdMembers > 0);
        
        householdMeters[_meter].householdMembers = _householdMembers;

        return true;
    }
}