pragma solidity ^0.4.18;

contract MerchantRegister {

    address creator;

    struct Merchant {
        string merchantId;
		bool active;        
        string ipfsHash;
    }


    Merchant[] public merchants;
    
    function MerchantRegister() public {
        creator = msg.sender;
    }


    function createMerchant(string _merchantId, bool _active, string _ipfsHash) public {
        //merchants.push(Merchant(_merchantId));   
        merchants.push(Merchant(_merchantId, _active, _ipfsHash));       
    }


    function getMerchantId() public constant returns (string) {
        return (merchants[0].merchantId);
    }

    function getMerchantActive() public constant returns (bool) {
        return (merchants[0].active);
    }

    function getMerchantIpsfHash() public constant returns (string) {
        return (merchants[0].ipfsHash);
    }
}