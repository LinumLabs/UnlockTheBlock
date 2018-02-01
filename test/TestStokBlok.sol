pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/StokBlok.sol";
import "../contracts/StokVel.sol";


contract TestStokBlok {

    // StokBlok testStokBlock = StokBlok(DeployedAddresses.StokBlok());

// Testing the adopt function 
    // function testCreateStokVel() public {

    //     uint8 mode=0;
        
    //     // arr = [0x2932b7A2355D6fecc4b5c0B6BD44cC31df247a2e,0xf17f52151EbEF6C7334FAD080c5704D77216b732,0x627306090abaB3A6e1400e9345bC60c78a8BEf57];
    //     address[10] contractAddr;
    //     contractAddr[0]=this;
        
    //     StokVel stokVel = testStokBlock.createStokvel(contractAddr,  mode);
        
    //     uint personBalance = stokVel.getPersonBalance(this);

    //     uint expected = 3;

    //     Assert.equal(personBalance,expected,"Get single Balance Passed");
    // }


    //  function testAddFundingToAddress() public {

    //     arr = [0x2932b7A2355D6fecc4b5c0B6BD44cC31df247a2e,0xf17f52151EbEF6C7334FAD080c5704D77216b732,0x627306090abaB3A6e1400e9345bC60c78a8BEf57];
    //     StokVel stokVel = testStokBlock.createStokvel(arr,  0);
    //     uint personBalance = stokVel.getPersonBalance(0x2932b7A2355D6fecc4b5c0B6BD44cC31df247a2e);

    //     uint expected = 3;
    //     Assert.equal(personBalance,expected,"Get single Balance Passed");
    //  }


}