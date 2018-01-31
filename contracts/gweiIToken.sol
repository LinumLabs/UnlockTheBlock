pragma solidity ^0.4.18;

// Contract is an extention on OpenZeppelin's contracts for safe maths and token base: https://github.com/OpenZeppelin/zeppelin-solidity

contract GweiIToken is StandardToken {
    
    address private owner;
    uint256 private weiToGweiI;
    mapping (address => uint256) internal addressToSteakAmounts;
    
    function GweiIToken() public payable {
        totalSupply_ = 1000000000;
        balances[msg.sender] = 1000000000;
        owner = msg.sender;
        weiToGweiI = 8550000000000; // Change this at time of deployment
    }
    
    function getEthBalance() public view returns (uint256) {
        return this.balance;
    }
    
    // conversion is in wei to eth based on the dollar exchange
    function setConversion(uint256 _exchangeRate) public {
        require(msg.sender == owner);

        weiToGweiI = _exchangeRate;
    }
    
    function ethExchange(uint256 _toExchange) payable external returns (bool) {
        require(_toExchange <= balances[msg.sender]);

        // SafeMath.sub will throw if there is not enough balance.
        balances[msg.sender] = balances[msg.sender].sub(_toExchange);
        balances[owner] = balances[_owner].add(_toExchange);
        Transfer(msg.sender, owner, _toExchange);
        
        uint amountToPay = SafeMath.mul(_toExchange, weiToGweiI);
        // If we fail to pay return tokens
        if (!msg.sender.send(amountToPay)) {
            balances[msg.sender] = balances[msg.sender].add(_toExchange);
            return false;
        }
        return true;
    }

    /*  
        To discourage cheating we allow eth to be staked that will be removed if
        someone tries to game the system
    */
    function increaseSteak() payable public {
        addressToSteakAmounts[msg.sender] += msg.value;
    } 

    function punish(uint256 _weiToPunish) public {
        require(msg.sender == owner);
        // require that the user has enough steaked to punish
        require(addressToSteakAmounts[msg.sender] >= _weiToPunish);

        addressToSteakAmounts[msg.sender] -= msg.value;
    }
}
