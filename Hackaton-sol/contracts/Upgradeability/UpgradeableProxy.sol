pragma solidity ^0.4.17;

import "./SharedStorage.sol";
import "./Forwardable.sol";

contract UpgradeableProxy is SharedStorage, Forwardable {
    /**
    * @dev UpgradeableProxy is a proxy contract to a contract implementation. The implementation
    *      can update the reference, which effectively upgrades the contract
    * @param _contractImpl Address of the contract used as implementation
    */
    function UpgradeableProxy(address _contractImpl) public {
        contractImplementation = _contractImpl;
    }

    /**
    * @dev All calls made to the proxy are forwarded to the contract implementation via a delegatecall
    * @return Any bytes32 value the implementation returns
    */
    function () payable public {
        delegatedFwd(contractImplementation, msg.data);
    }
}