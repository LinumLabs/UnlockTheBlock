pragma solidity ^0.4.18;

contract CustomOwnables {
  address public bank;
  address public localGvt;

  function setBankAddress(address _bankAddress) public {
    bank = _bankAddress;
  }

  function setLocalGvtAddress(address _localGvtAddress) public {
    localGvt = _localGvtAddress;
  }
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
    modifier onlyLocalGvt() {
        require(msg.sender == localGvt);
        _;
    }
}