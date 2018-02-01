pragma solidity ^0.4.18;

//import "../node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol";
//import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "./TokenSeller.sol";

contract TokenSellerFactory is Ownable {

    event TradeListing(address indexed ownerAddress, address indexed tokenSellerAddress,address indexed asset, uint256 sellPrice, uint256 units, bool sellsTokens);
    event OwnerWithdrewERC20Token(address indexed tokenAddress, uint256 tokens);
    address public TOKEN_ADDRESS;
    mapping (address => bool) public _verify;      //mapping to verify address has a smart contract made by factory
    
    /** @dev Constructor method
     *  @param _tokenAddress address Address of the token to be generated for contracts 
     */
    function TokenSellerFactory(address _tokenAddress) public {
        require(_tokenAddress != 0x0);
        TOKEN_ADDRESS = _tokenAddress;
    }
    /** @dev Verify Token Seller Contracts
     *       Function is called to verify the parameters of a deployed TokenSeller contract
     * @param  tradeContract address of contract to be verified
     * @return         valid    bool did this TokenTraderFactory create the TokenTrader contract?
     * @return         owner address is the owner of the TokenTrader contract
     * @return         asset address is the ERC20 asset address
     * @return     sellPrice    uint is the sell price in ethers per `units` of asset tokens
     * @return         units    uint is the number of units of asset tokens
     * @return   sellsTokens    bool is the TokenTrader contract selling tokens? 
     */
    function verify(address tradeContract) public view returns (bool valid, address owner, address asset, uint sellPrice, uint units, bool sellsTokens) {
        valid = _verify[tradeContract];
        if (valid) {
            TokenSeller t = TokenSeller(tradeContract);
            owner = t.owner();
            asset = t.asset();
            sellPrice = t.sellPrice();
            units = t.units();
            sellsTokens = t.sellsTokens();
        }
    }

    /** @dev Create TokenSeller contract
     *       Generates seller smart contracts for use of token sell orders.
     *       For example, listing a TokenSeller contract on the network where the 
     *       contract will sell H20 100 tokens at a rate of 0.1 ETH per H20 token:
     *              token address   0xa74476443119a942de498590fe1f2454d7d4ac0d
     *              sellPrice       10 ETH
     *              units           100
     *              sellsTokens     true
     * @param   sellPrice uint price of lot for sale
     * @param       units uint size of a lot
     * @param sellsTokens bool check if the contract has permission to sell
     */
    function createSaleContract(uint sellPrice, uint units, bool sellsTokens) public returns (address seller) {
        require(sellPrice >= 0 && units >= 0);
        //require(units >= 0);
        seller = new TokenSeller(TOKEN_ADDRESS, sellPrice, units, sellsTokens);
        _verify[seller] = true;
        TokenSeller(seller).transferOwnership(msg.sender);
        TradeListing(msg.sender, seller, TOKEN_ADDRESS, sellPrice, units, sellsTokens);
    }

    /** @dev Withdraw any ECR20 token from factory 
     *       Mainly used for erroneuos transaction sent to the factory
     * @param  tokenAddress address Address of token sent in error to contract
     * @param        tokens uint    Amount of tokens to be refunded
     * @return           ok bool    Refund confirmed
     */
    function ownerWithdrawERC20Token(address tokenAddress, uint256 tokens) public onlyOwner returns (bool ok) {
        OwnerWithdrewERC20Token(tokenAddress, tokens);
        return StandardToken(tokenAddress).transfer(owner, tokens);
    }


    function () public {
        revert();
    }
}

