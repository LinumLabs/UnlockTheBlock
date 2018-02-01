pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/RefugeeRegister.sol";

contract TestRefugeeRegister {
  	RefugeeRegister refugeeregister = RefugeeRegister(DeployedAddresses.RefugeeRegister());

	// Testing the _createRefugee() function
	function testUserCan_createRefugee() public {
  		string returnedId = refugeeregister._createRefugee("super ID 001", "Rodney", "Pedro", "G", "Male", "2018/01/29", "South African", "Active", "Public Key Goes Here");
  		// string expected = "super ID 001";
  		Assert.equal(returnedId, "super ID 001", "Refugee Id matches.");
	}
}