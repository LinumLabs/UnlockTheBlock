pragma solidity ^0.4.18;

contract StokVel {

    //STRUCTS

    //VARIABLES
    // Person[] public people;
    //event NewPerson(uint uId, string idNum, uint balance);

    uint totalBalance;
    uint week;
    uint contribution_period;
    uint contractMode;
    mapping (address => uint) public balances;
    uint exactAmount;

    // CONSTRUCTOR
    function StokVel(address[10] memory participantAdresses, uint amount, uint8 mode) public {
        // Size is the number of people on the StockVel
        // MODE : 0 - INSURANCE MODE
        // MODE : 1 - ROUND ROBIN MODE
        exactAmount = amount;
        for(uint i =0; i < participantAdresses.length;i++) {
            balances[participantAdresses[i]] = 0;
        }
        totalBalance = 0;
        week = 0;
        contractMode = mode;
    }

    //FUNCTIONS
    //FUNCTIONS
    //FUNCTIONS
    function getPersonBalance(address addr) public view returns (uint) {
        // return balances[msg.sender];
        return balances[addr];
    }

    event Withdraw (string wor);
    event Values (uint balance, uint requested, address sender);

    function withdraw(uint amountRequested) public { 
        string memory message;
        
        if(balances[msg.sender]>amountRequested) {
            message = "Funds Availible, withdraw successful ";
            
            balances[msg.sender] = balances[msg.sender] - amountRequested;

            msg.sender.send(amountRequested);
        } else {
            message = "Funds too low can't withdraw";
        }
        Values(balances[msg.sender], amountRequested, msg.sender );
        // Withdraw(message);
    }

    event getContractBalance(address contractAddress, uint balance);
    function getTheBalance() public view returns (uint) {
        getContractBalance(this, this.balance);
        return this.balance;
    }
    
    function freebie() public view returns (uint) {
        return 12;
    }

    event Test (uint before, uint fter, uint value, address sender);

    function() public payable {
        require(msg.value>0);

        uint before = balances[msg.sender]; 
        balances[msg.sender]+= msg.value;
        // to get contract address, this
        
        Test(before, balances[msg.sender],msg.value,msg.sender);
    }

}