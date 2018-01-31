pragma solidity ^0.4.18;

contract Utilities {

    //merchant, refugee, transaction description mappings may be added here
    //if mappings are added here then maybe some management functions may be added

    function isContract(address addr) public view returns (bool) {
        uint size;
        assembly { size := extcodesize(addr) }
        return size > 0;
    }



    //may add public key generation code in the future
}
