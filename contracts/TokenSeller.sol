pragma solidity ^0.4.18;

import "../node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol";
import "../node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract TokenSeller is Ownable {

    address public asset;       //token to be traded
    uint public sellPrice;      //price in ether of the token seller wants
    uint public units;          //number of tokens on offer by seller

    bool public sellsTokens;    //bool to check if the contract is selling tokens

    event ActivatedEvent(bool sells);           //event trigger to show that a account sells
    event MakerWithdrewAsset(uint256 tokens);   //event trigger when account withdraws a token asset
//    event MakerTransferredAsset(address toTokenSeller, uint256 tokens); //event trigger when account transfers a token asset
    event MakerWithdrewERC20Token(address tokenAddress, uint256 tokens); //event trigger when account withdraws an ERC20 compliant token asset
    event MakerWithdrewEther(uint256 ethers);       //event for when seller account withdraws ether from transaction
    event TakerBoughtAsset(address indexed buyer, uint256 ethersSent, uint256 ethersReturned, uint256 tokensBought);    //event for when buyer account purchases token asset

    /** @dev Constructor Method
     *       Constructor should only be called by the TokenSellerFactory contract
     * @param _asset address address of token asset to be sold for ether
     * @param     _sellPrice uint    Price sales price of lot 
     * @param         _units uint    size of lot 
     * @param   _sellsTokens bool    validate that TokenSeller contract has permission to sell from Factory
     */
    function TokenSeller(address _asset, uint _sellPrice, uint _units, bool _sellsTokens) public {
        asset = _asset;
        sellPrice = _sellPrice;
        units = _units;
        sellsTokens = _sellsTokens;
        ActivatedEvent(sellsTokens);
    }

    /** @dev Activate/Deactivate contract sell status
     *       Maker of the contract can control sell permission of the contract
     * @param _sellsTokens bool permission variable
     */
    function activate(bool _sellsTokens) public onlyOwner {
        sellsTokens = _sellsTokens;
        ActivatedEvent(sellsTokens);
    }

    
    /** @dev Withdraw tokens from contract
     *       Owner can withdraw tokens deposited into contract.
     * @param tokens uint amount of tokens to be withdrawn
     * @return    ok bool withdrawel confirmation
     */
    function makerWithdrawTokens(uint256 tokens) public onlyOwner returns (bool ok) {
        require(StandardToken(asset).balanceOf(this) >= tokens);
        MakerWithdrewAsset(tokens);
        return StandardToken(asset).transfer(owner, tokens);
    }
    
    /** @dev Token balance of contract
     * @return balance uint Shows the balance of tokens deposited in contract
     */
    function makerGetBalance() public view returns (uint balance) {
        return StandardToken(asset).balanceOf(this);
    }
 
    /** @dev Return Tokens to Contract Maker
     *       Used to return tokens accidentally sent for sale, that is, if the incorrect token type was sent.
     *       Only permissable for contract owner to perform reversal
     * @param tokenAddress address Address of token accidentally sent
     * @param       amount    uint amount sent to be reversed
     * @return     confirm    bool confirmation to ensure function executed
     */
    function makerWithdrawERC20Token(address tokenAddress, uint amount) public onlyOwner returns (bool confirm) {
        MakerWithdrewERC20Token(tokenAddress, amount);
        return StandardToken(tokenAddress).transfer(owner, amount);
    }

    /** @dev Withdraw Ether from Contract
     *       Maker can withdraw ether sent to contract for trade. Only can be executed by contract owner.
     *       Contract balance is checked to ensure sufficient ether is available for withdrawel.
     * @param   amount uint ether amount to be withdrawn
     * @return confirm bool transaction confirmation
     */
    function makerWithdrawEther(uint amount) public onlyOwner returns (bool confirm) {
        
        if (this.balance >= amount) {               //check contract balance
            MakerWithdrewEther(amount);
            return owner.send(amount);
        }
        return false;
    }

    /** @dev Show ether balance for contract
     * @return ether uint shows ether held in smart contract
     */
    function getEtherBalance() public view returns (uint ethers) {
        return this.balance;
    }

    /** @dev Taker Purchases Token
     *       Tokens held in contract are purchased in ether. The contract is held and owned by the maker.
     *       The taker pays ether to the contract in exchange for the deposited tokens
     */
    function takerBuyAsset() public payable {
        if (sellsTokens || msg.sender == owner) {
            // Note that sellPrice has already been validated as > 0
            // Note that units has already been validated as > 0
            require(msg.value == sellPrice);
            uint can_sell = makerGetBalance();
            //uint256 change = 0;
            StandardToken(asset).transfer(msg.sender, can_sell);
            units -= can_sell;
            sellPrice -= msg.value;
            TakerBoughtAsset(msg.sender, msg.value, units, sellPrice);

        } else {
        // Return user funds if the contract is not selling
            require(msg.sender.send(msg.value));
        }
    }

    /** Fallback function 
     */
    function() payable public {
        takerBuyAsset;
    }

}