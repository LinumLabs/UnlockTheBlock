pragma solidity ^0.4.16;
import ".././node_modules/zeppelin-solidity/contracts/token/ERC20/BasicToken.sol";
import "./Agreement.sol";
import "./AccessRestriction.sol";
//THis is the ERC20 basic token that is used to facilitate loyality program transactions.
//It is owned by the msg.sender that called the create token function in the factory ie ThebaRController contract

//Themba is a south african word for trust.

contract ThembaR is BasicToken, AccessRestriction {
    address public owner;
    address[] public agreements;
    string public name; 
    string public symbol;
    uint public INITIAL_SUPPLY = 5000000000000;

    //Constructor
    function ThembaR(address _owner, string _name, string _symbol) {
        owner = _owner;
        name = _name;
        symbol = _symbol;
        totalSupply_ = INITIAL_SUPPLY;
        balances[_owner] = INITIAL_SUPPLY;
    }
    //Returns the business that owns the token
    function getOwner() external view returns (address) {
        return owner;
    }

    //This returns the balance of the customer at the specified address.
    //The restrictions were removed from the ERC20 token and therefore it is the reloaded function.
    function getBalanceReloaded(address accountHolder) public view returns (uint) {
        return balances[accountHolder];
    }
    //This creates an agreement for the owner of the token
    //This agreement will be added to the agreement list and signed will be false and the _arrangee signs the agreement
    function addAgreement(address _arrangee, uint _direction, uint _left, uint _right, bool _canPort) onlyBy(owner) public {
        address a = new Agreement(owner, _arrangee,this, _direction,  _left, _right, _canPort);
        agreements.push(a);
    }
    //Returns all the agreements associated with the token
    function getAgreementList() public view returns (address[]) {
        return agreements;
    }
    //get all the agreements associated with this token that are signed and return an array of addresses
    function getSignedPartners() public returns (address[]) {
        address[] toReturn;
        for (uint i = 0;i < agreements.length;i++) {
            Agreement tempAgreement = Agreement(agreements[i]);
            address signedSigner = tempAgreement.getSignedSigner();
            if (signedSigner != 0x0) {
                toReturn.push(signedSigner);
            }
        }
        return toReturn;
    }
    //get the agreements of the _signer that are not signed, this can be requested by the signer to verify if they have signed
    function getSignerUnSignedAgreements(address _signer) public returns(address[]) {
         address[] toReturn;
        for (uint i = 0;i < agreements.length;i++) {
            Agreement tempAgreement = Agreement(agreements[i]);
            if (tempAgreement.amIUnsignedSigner(_signer)) {
                toReturn.push(tempAgreement);
            }
        }
        return toReturn;
    }
   function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
        require(_to != address(0));
        balances[_from] = balances[_from].sub(_value);
        balances[_to] = balances[_to].add(_value);
        Transfer(_from, _to, _value);
        return true;
    }
    //Used by this token to participate in the agreement that was sent as the parameter
    function signAgreement(address _agreementAddress) public {
        Agreement toSign = Agreement(_agreementAddress);
        toSign.signAgreement(this);
        agreements.push(toSign);   
    }
    //Used by an agreement to transfer funds
     function specialTransfer(address _to, uint amount, address _from, address agreement) public {
            for (uint i = 0; i < agreements.length; i++) {
                if (agreements[i] == agreement) {
                    transferFrom(_from, _to, amount);
                }
              }
        }      
    }