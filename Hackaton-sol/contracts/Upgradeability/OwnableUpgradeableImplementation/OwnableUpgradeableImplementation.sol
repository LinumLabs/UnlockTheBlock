pragma solidity ^0.4.17;

import '../SharedStorage.sol';
import '../../Ownership/NotInitedOwnable.sol';

contract OwnableUpgradeableImplementation is SharedStorage, NotInitedOwnable {

	/**
	* @dev Initializes the contract and inits with the msg sender as an owner
	* account.
	*/
	function init() public {
		require(owner == address(0));
		owner = msg.sender;
	}

	event UpgradedContract(address indexed _newImpl);
    
    function upgradeImplementation(address _newImpl) onlyOwner public {
        contractImplementation = _newImpl;
        UpgradedContract(_newImpl);
    }

    function getImplementation() constant public returns(address) {
        return contractImplementation;
    }

	function getOwner() constant public returns(address) {
		return owner;
	}
}