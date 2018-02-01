pragma solidity ^0.4.18;

import "./StokVel.sol";

contract StokBlok {

    // CONSTRUCTOR

    //VARIABLES
    address[] public children;

    //FUNCTIONS
    function createStokvel(address[10] memory participants, uint amount, uint8 mode) public payable returns(StokVel) {
        //add address to child list?

        StokVel stok =  new StokVel(participants, amount, mode);
        children.push(address(stok));
        return stok;
        // children.push(address(new StokVel(participants, contribution_size, mode)));
        // return children[children.length-1];
        //Return Address of contract
    }

    function() public payable { 

        require(msg.value > 0);
        // msg.sender.transfer(msg.value);
    }

}