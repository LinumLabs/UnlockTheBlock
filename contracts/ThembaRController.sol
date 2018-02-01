pragma solidity ^0.4.16;
import "./ThembaR.sol";

contract ThembaRController {
    struct program {
        address company;
        address token;
    }
    mapping(uint=>program) private tokens;
    uint numTokens=0;
    address _owner;
    function ThembaRController() public {
        _owner = msg.sender;
    }
    function createNewToken(string _name, string _symbol) public { //business should call this
        ThembaR newToken = new ThembaR(msg.sender, _name, _symbol);    
        numTokens++;
        tokens[numTokens] = program(msg.sender,newToken);
    }
     function createBizToken(address ownerAdd, string _name, string _symbol) public { //business should call this
        ThembaR newToken = new ThembaR(ownerAdd, _name, _symbol);
        numTokens++;
        tokens[numTokens] = program(ownerAdd,newToken);
    }
    function getAllTokens() public returns (address[]) {
         address[] allTokens;
        for (uint i = 1;i <= numTokens;i++) {
            ThembaR temp = ThembaR(tokens[i].token);
            allTokens.push(temp);
        }
        return allTokens;
    } 
    function getCustomerTokens() public returns (address[]) {
        address[] customerTokens;
        for (uint i = 1;i <= numTokens;i++) {
            ThembaR temp = ThembaR(tokens[i].token);
            if (temp.balanceOf(msg.sender) >= 0) {
                customerTokens.push(temp);
            }
        }
        return customerTokens;
    }
}

