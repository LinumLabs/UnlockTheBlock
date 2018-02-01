pragma solidity ^0.4.18;

import "../node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol";

contract CustomOwnables is Ownable {
  address public bank;
  address public localGvt;


    /**
    * @dev Throws if called by any account other than the bank.
    * only the bank can tokenise, delay token expiry and burn tokens
    */
    modifier onlyBank() {
        require(msg.sender == bank);
        _;
    }

    
    /**
    * @dev Throws if called by any account other than local government.
    * only local government can manage refugee details
    */
    
    /*
    to be added in phase 2 for refugee registration permissions
    modifier onlyLocalGvt() {
        require(msg.sender == localGvt);
        _;
    }
    
      function setLocalGvtAddress(address _localGvtAddress) public onlyOwner {
      localGvt = _localGvtAddress;
    }
    
    */

  //allows the dapp administrator to set the address of the bank
  function setBankAddress(address _bankAddress) public onlyOwner returns (bool) {
    require (_bankAddress != 0x0);
    bank = _bankAddress;
    return true;
  }

}
