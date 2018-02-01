pragma solidity ^0.4.17;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "./Date/DateTime.sol";
import "./Date/DateTimeAPI.sol";

contract H2ICO is MintableToken {
    
    string private name = "H2ICO";
    string private symbol = "kl";
    uint8 private decimals = 3;
    uint private INITIAL_SUPPLY = 0;
    address private owner;

    /*
        Description: Constructor for Token, generates a token with total supply of 0
        and makes the deployer/issuer of the contract the owner.
        User water limit set to 0
    */
    function H2ICO() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
        owner = msg.sender;
    }
    //possible race condition see standard approve
     function approveSale(address _sender,uint256 _value) public onlyOwner returns (bool) {
        allowed[_sender][owner] = _value;
        Approval(_sender, owner, _value);
        return true;
    }
    /**
    * @dev Transfer tokens from one address to another burning a percentage of the tokens across the transferal
    * @param _from address The address which you want to send tokens from
    * @param _to address The address which you want to transfer to
    * @param _value uint256 the amount of tokens to be transferred
    * @param _burnPercentage the water that is burnt "lost"  
    */

    function exchange(address _from, address _to, uint256 _value,uint _burnPercentage) public onlyOwner returns (bool) {
        require(_burnPercentage<100);
        require(_to != address(0));
        require(_value <= balances[_from]);
        require(_value <= allowed[_from][msg.sender]);
        uint burnAmount = _value.mul(_burnPercentage);
        burnAmount = burnAmount.div(100);
        uint transferAmount = _value.sub(burnAmount);
        balances[_from] = balances[_from].sub(_value);
        balances[_to] = balances[_to].add(transferAmount);
        allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);
        Transfer(_from, _to, _value);//firing event
        return true;
    }

    /**
    * @dev Function to mint tokens and set User value
    * @param _to The address that will receive the minted tokens.
    * @param _amount The amount of tokens to mint.
    * @return A boolean that indicates if the operation was successful.
    */
    function mintSet(address _to, uint256 _amount) onlyOwner canMint public returns (bool) {
        totalSupply_ = totalSupply_.add(_amount);
        balances[_to] = _amount;
        Mint(_to, _amount);
        Transfer(address(0), _to, _amount);
        return true;
    }
}