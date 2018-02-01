pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

// Bank contract, for managing merchants and tokens

contract Bank is Ownable {
    
    struct Merchant {
        address merchantAddress; 
        string name;
        string typeOfGoods; // colon seperated list of goods sold
    }

    mapping (address => Merchant) merchants;

    // finds and returns if a Merchant exists with the provided address
    function findMerchant(address merchant) public view returns (address, string, string) {
        return (merchants[merchant].merchantAddress, merchants[merchant].name, 
            merchants[merchant].typeOfGoods);
    }

    // adds a merchant if it does not exist
    function addMerchant(address merchant, string name, string typeOfGoods) onlyOwner public {
        var (m,,,) = findMerchant(merchant);
        require(m == address(0)); 
        merchants[msg.sender] = Merchant(merchant, name, typeOfGoods);
    }

    //
    function removeMerchant(address merchant) onlyOwner public {
        var (m,,,) = findMerchant(merchant);
        require(m != address(0)); 
        delete merchants[msg.sender];
    }

}