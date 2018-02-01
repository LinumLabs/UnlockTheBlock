pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

// NGO contract, for managing funds

contract NGO is Ownable {

    struct Beneficiary {
        address beneficiaryAddress;
        string id; //hashed id/passport
    }

    mapping (address => Beneficiary) beneficiaries;

    // finds and returns beneficiaries by address
    function findBeneficiary(address beneficiary) public view returns (address, string) {
        return (beneficiaries[beneficiary].beneficiaryAddress, beneficiaries[beneficiary].id);
    }
    
    function addBeneficiary(address beneficiary, string id) public {
        require(beneficiaries[beneficiary].beneficiaryAddress == address(0)); 
        beneficiaries[beneficiary] = Beneficiary(beneficiary, id);
    }
    
    function removeBeneficiary(address beneficiary) public {
        var (b,,) = findBeneficiary(beneficiary);
        require(b != address(0)); 
        delete beneficiaries[beneficiary];
    }
}
