pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CertStore.sol";

contract TestAdminCreateUniversities {
    CertStore certStore = CertStore(DeployedAddresses.CertStore());

    // Testing the create admins function
    function testUniversitiesCreated() public {

        address[10] memory universities = certStore.getUniversities();

        address _university0 = 0xf17f52151EbEF6C7334FAD080c5704D77216b732;
        address _university1 = 0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef;
        address _university2 = 0x821aEa9a577a9b44299B9c15c88cf3087F3b5544;

        Assert.equal(universities[0], _university0, "University 0 not created");
        Assert.equal(universities[1], _university1, "University 1 not created");
        Assert.equal(universities[2], _university2, "University 2 not created");
        
    }

    // Testing the create admins function
    // function testAddUniversity() public {

    //     address _university3 = 0xf17f52151EbEF6C7334FAD080c5704D77216b732;
    //     certStore.addUniversity(_university3);

    //     address[10] memory universities = certStore.getUniversities();

    //     Assert.equal(universities[3], _university3, "University 3 not created");
        
    // }

    // Testing the create admins function
    function testUsersCreated() public {

        address[10] memory users = certStore.getUsers();

        address _user0 = 0x0d1d4e623D10F9FBA5Db95830F7d3839406C6AF2;
        address _user1 = 0x2932b7A2355D6fecc4b5c0B6BD44cC31df247a2e;
        address _user2 = 0x2191eF87E392377ec08E7c08Eb105Ef5448eCED5;
        address _user3 = 0x0F4F2Ac550A1b4e2280d04c21cEa7EBD822934b5;


        Assert.equal(users[0], _user0, "User 0 not created");
        Assert.equal(users[1], _user1, "User 1 not created");
        Assert.equal(users[2], _user2, "User 2 not created");
        Assert.equal(users[3], _user3, "User 2 not created");
        
    }

    // Testing the create admins function
    // function testAddUser() public {

    //     address _user4 = 0xf17f52151EbEF6C7334FAD080c5704D77216b732;
    //     certStore.addUser(_user4);

    //     address[10] memory users = certStore.getUsers();

    //     Assert.equal(users[4], _user4, "User 4 not created");
        
    // }
}
