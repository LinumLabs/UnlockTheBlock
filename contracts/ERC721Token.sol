pragma solidity ^0.4.18;

import "../node_modules/zeppelin-solidity/contracts/token/ERC721/ERC721.sol";
import "../node_modules/zeppelin-solidity/contracts/math/SafeMath.sol";

/**
 * @title ERC721Token
 * Generic implementation for the required functionality of the ERC721 standard
 */

 contract ERC721Token is ERC721 {
  using SafeMath for uint256;

  // Total amount of tokens
  uint256 private totalTokens;

  // Mapping from token ID to owner
  mapping (uint256 => address) private tokenOwner;

  // Mapping from token ID to approved address
  mapping (uint256 => address) private tokenApprovals;

  // Mapping from owner to list of owned token IDs
  mapping (address => uint256[]) private ownedTokens;

  // Mapping from token ID to index of the owner tokens list
  mapping(uint256 => uint256) private ownedTokensIndex;

  //public mapping of all loan applications linked to farmer
  mapping(address => LoanApplication[]) public loanApplications; //this was changed (capital L)

  mapping(address => bool) public activeFarmers; 
/**
  * @dev Guarantees msg.sender is owner of the given token
  * @param _tokenId uint256 ID of the token to validate its ownership belongs to msg.sender
  */
  modifier onlyOwnerOf(uint256 _tokenId) {
    require(ownerOf(_tokenId) == msg.sender);
    _;
  }

  modifier onlyFarmer() {
    require(activeFarmers[msg.sender] == true);
    _; 
  }


  function newFarmer(address _newFarmer) public {
      require(_newFarmer != address(0));
      activeFarmers[msg.sender] = true;
  }


  /**
  * @dev Gets the total amount of tokens stored by the contract
  * @return uint256 representing the total amount of tokens
  */
  function totalSupply() public view returns (uint256) {
    return totalTokens;
  }

  /**
  * @dev Gets the balance of the specified address
  * @param _owner address to query the balance of
  * @return uint256 representing the amount owned by the passed address
  */
  function balanceOf(address _owner) public view returns (uint256) {
    return ownedTokens[_owner].length;
  }

  /**
  * @dev Gets the list of tokens owned by a given address
  * @param _owner address to query the tokens of
  * @return uint256[] representing the list of tokens owned by the passed address
  */
  function tokensOf(address _owner) public view returns (uint256[]) {
    return ownedTokens[_owner];
  }

  /**
  * @dev Gets the owner of the specified token ID
  * @param _tokenId uint256 ID of the token to query the owner of
  * @return owner address currently marked as the owner of the given token ID
  */
  function ownerOf(uint256 _tokenId) public view returns (address) {
    address owner = tokenOwner[_tokenId];
    require(owner != address(0));
    return owner;
  }

  /**
   * @dev Gets the approved address to take ownership of a given token ID
   * @param _tokenId uint256 ID of the token to query the approval of
   * @return address currently approved to take ownership of the given token ID
   */
  function approvedFor(uint256 _tokenId) public view returns (address) {
    return tokenApprovals[_tokenId];
  }

  /**
  * @dev Transfers the ownership of a given token ID to another address
  * @param _to address to receive the ownership of the given token ID
  * @param _tokenId uint256 ID of the token to be transferred
  */
  function transfer(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
    clearApprovalAndTransfer(msg.sender, _to, _tokenId);
  }

  /**

  * @dev Approves another address to claim for the ownership of the given token ID
  * @param _to address to be approved for the given token ID
  * @param _tokenId uint256 ID of the token to be approved
  */
  function approve(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
    address owner = ownerOf(_tokenId);
    require(_to != owner);
    if (approvedFor(_tokenId) != 0 || _to != 0) {
      tokenApprovals[_tokenId] = _to;
      Approval(owner, _to, _tokenId);
    }
  }

  /**
  * @dev Claims the ownership of a given token ID
  * @param _tokenId uint256 ID of the token being claimed by the msg.sender
  */
  function takeOwnership(uint256 _tokenId) public {
    require(isApprovedFor(msg.sender, _tokenId));
    clearApprovalAndTransfer(ownerOf(_tokenId), msg.sender, _tokenId);
  }

  /**
  * @dev Mint token function
  * @param _to The address that will own the minted token
  * @param _tokenId uint256 ID of the token to be minted by the msg.sender
  */
  // will change status soon, public for now. 
  function _mint(address _to, uint256 _tokenId) public onlyFarmer() {
    require(_to != address(0));
    addToken(_to, _tokenId);
    Transfer(0x0, _to, _tokenId);
  }

  /**
  * @dev Burns a specific token
  * @param _tokenId uint256 ID of the token being burned by the msg.sender
  */
  function _burn(uint256 _tokenId) onlyOwnerOf(_tokenId) internal {
    if (approvedFor(_tokenId) != 0) {
      clearApproval(msg.sender, _tokenId);
    }
    removeToken(msg.sender, _tokenId);
    Transfer(msg.sender, 0x0, _tokenId);
  }

  /**
   * @dev Tells whether the msg.sender is approved for the given token ID or not
   * This function is not private so it can be extended in further implementations like the operatable ERC721
   * @param _owner address of the owner to query the approval of
   * @param _tokenId uint256 ID of the token to query the approval of
   * @return bool whether the msg.sender is approved for the given token ID or not
   */
  function isApprovedFor(address _owner, uint256 _tokenId) internal view returns (bool) {
    return approvedFor(_tokenId) == _owner;
  }

  /**
  * @dev Internal function to clear current approval and transfer the ownership of a given token ID
  * @param _from address which you want to send tokens from
  * @param _to address which you want to transfer the token to
  * @param _tokenId uint256 ID of the token to be transferred
  */
  function clearApprovalAndTransfer(address _from, address _to, uint256 _tokenId) internal {
    require(_to != address(0));
    require(_to != ownerOf(_tokenId));
    require(ownerOf(_tokenId) == _from);

    clearApproval(_from, _tokenId);
    removeToken(_from, _tokenId);
    addToken(_to, _tokenId);
    Transfer(_from, _to, _tokenId);
  }

  /**
  * @dev Internal function to clear current approval of a given token ID
  * @param _tokenId uint256 ID of the token to be transferred
  */
  function clearApproval(address _owner, uint256 _tokenId) private {
    require(ownerOf(_tokenId) == _owner);
    tokenApprovals[_tokenId] = 0;
    Approval(_owner, 0, _tokenId);
  }

  /**
  * @dev Internal function to add a token ID to the list of a given address
  * @param _to address representing the new owner of the given token ID
  * @param _tokenId uint256 ID of the token to be added to the tokens list of the given address
  */
  function addToken(address _to, uint256 _tokenId) private {
    require(tokenOwner[_tokenId] == address(0));
    tokenOwner[_tokenId] = _to;
    uint256 length = balanceOf(_to);
    ownedTokens[_to].push(_tokenId);
    ownedTokensIndex[_tokenId] = length;
    totalTokens = totalTokens.add(1);
  }

  /**
  * @dev Internal function to remove a token ID from the list of a given address
  * @param _from address representing the previous owner of the given token ID
  * @param _tokenId uint256 ID of the token to be removed from the tokens list of the given address
  */
  function removeToken(address _from, uint256 _tokenId) private {
    require(ownerOf(_tokenId) == _from);

    uint256 tokenIndex = ownedTokensIndex[_tokenId];
    uint256 lastTokenIndex = balanceOf(_from).sub(1);
    uint256 lastToken = ownedTokens[_from][lastTokenIndex];

    tokenOwner[_tokenId] = 0;
    ownedTokens[_from][tokenIndex] = lastToken;
    ownedTokens[_from][lastTokenIndex] = 0;
    // Note that this will handle single-element arrays. In that case, both tokenIndex and lastTokenIndex are going to
    // be zero. Then we can make sure that we will remove _tokenId from the ownedTokens list since we are first swapping
    // the lastToken to the first position, and then dropping the element placed in the last position of the list

    ownedTokens[_from].length--;
    ownedTokensIndex[_tokenId] = 0;
    ownedTokensIndex[lastToken] = tokenIndex;
    totalTokens = totalTokens.sub(1);
  }

}

// review token trade names


contract Escrow {

  uint balance;
  address public buyer; // buyer of the loan application
  address public seller; // seller of the loan application (farmer)
  address private escrow; // address of escrow
  uint private start; // start time of contract
  bool public buyerOk; // false if 
  bool public sellerOk;
  
  
  function Escrow(address buyerAddress, address sellerAddress) public {
    // this is the constructor function that runs ONCE upon initialization
    buyer = buyerAddress;
    seller = sellerAddress;
    escrow = msg.sender;
    start = now; //now is an alias for block.timestamp, not really "now"
    
  }
        
  function accept(address sender) public {
    if (sender == buyer) {
      buyerOk = true;
    } else if (sender == seller) {
      sellerOk = true;
    }
    if (buyerOk && sellerOk) {
      payBalance();
    } else if (buyerOk && !sellerOk && now > start + 30 days) {
    // Freeze 30 days before release to buyer. The customer has to remember to call this method after freeze period.
      selfdestruct(buyer);
    }
  }
        
  function payBalance() private {
    // we are sending ourselves (contract creator) a fee
    //escrow.transfer(this.balance / 100);
    // send seller the balance
    assert (seller.send(this.balance));  //change this to an assert function
    balance = 0;
    
 
    }
    
  function deposit(address _buyer) public payable {
    if (_buyer == buyer) {
      balance += msg.value;
    }
  }
    
  function cancel() public {
    if (msg.sender == buyer) {
      buyerOk = false;
    } else if (msg.sender == seller) {
      sellerOk = false;
    }
    // if both buyer and seller would like to cancel, money is returned to buyer 
    if (!buyerOk && !sellerOk) {
      selfdestruct(buyer);
      }
    }
   function kill() public {
    if (msg.sender == escrow) {
      selfdestruct(buyer);
    }
  }
}

contract LoanApplication {
    uint public tokenId; 
    address public farmer;
    uint public price;
    uint public interest;

  // Constructor - only to be called by the TokenTraderFactory contract
  function LoanApplication (uint256 _tokenId, address _farmer, uint256 _price, uint256 _interest) public {
        tokenId = _tokenId;
        farmer = _farmer;
        price = _price;
        interest = _interest;
        //ActivatedEvent(buysTokens, sellsTokens);
    }  
  

}


// This contract deploys TokenTrader contracts and logs the event
contract LoanFactory is ERC721Token {
   
   event ApplicationCreates(address app);
   event ApplicationBought(address farmer, uint token, address escrow); //issue here is that this is a different contract. So do we need to assign it
  //      address indexed asset, uint256 buyPrice, uint256 sellPrice, uint256 units,
  //      bool buysTokens, bool sellsTokens);
   // event OwnerWithdrewERC20Token(address indexed tokenAddress, uint256 tokens);

  mapping(address => address) public Applications; // maps application address to farmer

  mapping(address => address)  ApplicationsInEscrow; // maps application addres to escrow address


  LoanApplication application; 
  Escrow escrow;
  //bool valid; 



 /* function verify(address escrowContract) public constant returns (
        uint balance,
        address buyer,
        address seller,
        bool buyerOk,
        bool sellerOk
    ) {
        valid = _verify[escrowContract];
        if (valid) {
            Escrow e = Escrow(escrowContract);
            owner = e.balance();
            asset = e.buyer();
            buyPrice = e.seller();
            sellPrice = e.buyerOk();
            units = e.sellerOk();
        }
    }*/

  event Test (address applicationAddress);
  function test(uint _token, address _farmer, uint _price, uint _interest) public returns (address) {

      require(ownerOf(_token) == _farmer);
      application = new LoanApplication(_token, _farmer, _price, _interest);
        // Record that this factory created the trader
        Applications[application] = _farmer;
        // Set the owner to whoever called the function
        //loanApplication(application).transferOwnership(msg.sender);
        //ApplicationBought(_farmer, _token, _price, _interest);
        Test(application);
        return application;
    }

  
  
  
  
 
  function buyLoanApplication(address _application) payable public {
      // escrow contract is created.
      if ( LoanApplication(_application).price() < msg.value) {
        // first buy deposits to escrow
        escrow = new Escrow(msg.sender, Applications[_application]);
        ApplicationsInEscrow[_application] = escrow;
        Escrow(escrow).deposit.value(msg.value)(msg.sender);
        Escrow(escrow).accept(msg.sender);
      }
      ApplicationBought(LoanApplication(_application).farmer(), LoanApplication(_application).tokenId(), escrow); 
      
      
      // use this to aprove.


  }

} 