pragma solidity ^0.4.17;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";

contract SifCoin is BurnableToken, MintableToken {
    string public name = "SifCoin";
    string public symbol = "SIF";
    
}
