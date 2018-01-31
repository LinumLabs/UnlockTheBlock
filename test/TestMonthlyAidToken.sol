pragma solidity ^0.4.18;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MonthlyAidToken";

contract TestMonthlyAidToken {

    MonthlyAidToken monthlyAidToken = MonthlyAidToken(DeployedAddresses.MonthlyAidToken());

    //Test initialisation of tokens
    function testTokenSupplyInitialisation() public {
        uint expectedTotalSupply = 1000000;
        monthlyAidToken.initialiseTokens(expectedTotalSupply);
        uint recordedTotalSupply = monthlyAidToken.getTotalSupply();
        Assert.equal(expectedTotalSupply, recordedTotalSupply, "Initialisation of token supply failed");
    }
    //Test token timestamping 
    function testTokenInitialisation() public {
        uint expectedTotalSupply = 1000000;
        monthlyAidToken.initialiseTokens(expectedTotalSupply);
        uint recordedTotalSupply = monthlyAidToken.getTotalSupply();
        Assert.equal(expectedTotalSupply, recordedTotalSupply, "Initialisation of token supply failed");
    }
    //Test token expiry check

    //we are using transfer function bcz both merchant and refugee are externally owned accounts
    //Test successful transfer of tokens to other user
    //Test attempted transfer with lower balance
    //Test attemepted transfer with expired tokens


    //Test name updates
    //Test symbol updates

}