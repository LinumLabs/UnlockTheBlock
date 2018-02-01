pragma solidity ^0.4.18;

import "../node_modules/zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";
import "../node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "../node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol";
import "../contracts/CustomOwnables.sol";


contract MonthlyAidToken is BurnableToken, StandardToken, Ownable, CustomOwnables {

    string public name = "MonthlyAidToken"; 
    string public symbol = "MAT"; 
    uint public dateOfIssue = 0;

    /*each time a merchant reeives a token, check the date it was issued
    if the dateOfIssue is zero then the transaction can be processed
    else if the dateOfIssue is non zero, then check if 30 days have passed
    if they have then the token has expired and cannot be used */
    /**/


    /**only the bank can initialise tokens and delay their expiry */

    function initialiseTokens(uint _totalSupply) public onlyBank returns (bool) {
        totalSupply_ = _totalSupply;
        require (bank != 0x0);
        balances[bank] = totalSupply_;
        _addTimestamp();
        return true;
    }

    //delays the expiry of tokens by the specified number of days
    //days are explicitly converted into seconds
    function delayExpiry(uint _days) public onlyBank {
        dateOfIssue = (dateOfIssue + _days*24*60*60);
    }

    /**
   * @dev Burns a specific amount of tokens.
   * @param _value The amount of token to be burned.
   *burns from the merchant's address when purchase is made and from refugee's address
   *when they atempt to use expired tokens
   */
  function burnFrom(address _from, uint256 _value) public onlyBank returns (bool) {
    require(_value <= balances[_from]);
    // no need to require value <= totalSupply, since that would imply the
    // sender's balance is greater than the totalSupply, which *should* be an assertion failure

    address burner = _from;
    balances[burner] = balances[burner].sub(_value);
    totalSupply_ = totalSupply_.sub(_value);
    Burn(burner, _value);
    return true;
  }

	// Will return `true` if 30 days have passed since the token was issued 
	// else `false` if 30 days have not passed
    // The merchant checks for this each time a refugee wants to use their token
	function tokenExpired() external view returns (bool) {
	  return (now > (dateOfIssue + 30 days));
	}


    /**helper functions */
    // add the current timestamp by setting `dateOfIssue` to `now`
	function _addTimestamp() private {
	    dateOfIssue = now;
	}


    //token transaction functions
    //this is called by the bank 
    function facilitatePurchase(address _fromRefugee, address _toMerchant, uint _bill) public {
        transferFrom(_fromRefugee, _toMerchant, _bill);
        burnFrom(_toMerchant, _bill);
    }

    //burns the refugee's expired tokens when they try to use them
    function burnExpiredTokens(address _fromRefugee) public onlyBank {
        burnFrom(_fromRefugee, balanceOf(_fromRefugee));
    }

	//in the future, functions cuold be added to allow for the modification of the token name, symbol, expiry period
}
