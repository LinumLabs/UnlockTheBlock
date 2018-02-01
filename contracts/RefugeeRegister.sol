pragma solidity ^0.4.18;

contract RefugeeRegister {

    address creator;

    struct Refugee {
        string refugeeId;
        string refugeePublicKey;
		bool active;        
        string ipfsHash;
    }


    Refugee[] public refugees;
    
    function RefugeeRegister() public {
        creator = msg.sender;
    }


    function createRefugee(string _refugeeId, string _refugeePublicKey, string _ipfsHash) public {
        refugees.push(Refugee(_refugeeId, _refugeePublicKey, true, _ipfsHash));       
    }


    function getRefugeeId() public constant returns (string) {
        return (refugees[0].refugeeId);
    }
}