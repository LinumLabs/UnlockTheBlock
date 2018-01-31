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
    /*function burnExpiredTokens() {

    }*/


    /**only the bank can initialise tokens and delay their expiry */

    function initialiseTokens(uint _totalSupply) public onlyBank {
        totalSupply_ = _totalSupply;
        _addTimestamp();
    }

    function getTotalSupply() public view returns (uint) {
        return totalSupply_;
    }

    //delays the expiry of tokens by the specified number of days
    //days are turned into seconds
    function delayExpiry(uint _days) public onlyBank {
        dateOfIssue = (dateOfIssue + _days*24*60*60);
    }

    /**only the owner can change the name and symbol of the token */
    function updateName(string _name) public onlyOwner {
        name = _name;
    }

    function updateSymbol(string _symbol) public onlyOwner {
        symbol = _symbol;
    }

	// Will return `true` if 30 days have passed since the token was issued 
	// else `false` if 30 days have not passed
    // The merchant checks for this each time a refugee wants to use their token
	function tokenExpired() external view returns (bool) {
	  return (now >= (dateOfIssue + 30 days));
	}


    /**helper functions */
    // add the current timestamp by setting `dateOfIssue` to `now`
	function _addTimestamp() private {
	    dateOfIssue = now;
	}
}