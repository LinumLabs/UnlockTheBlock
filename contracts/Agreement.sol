pragma solidity ^0.4.16;

import "./ThembaR.sol";
import "./AccessRestriction.sol";

contract Agreement is AccessRestriction {
    address private owner;
    address private ownerToken;
    address private signer;
    address private signerToken;
    uint private direction;
    uint private left;
    uint private right;
    bool private signed;
    bool private canPort;

    //The agreement can be signed by any organisation,
    // a customer of one organisation may also be the owner of another business, 
    //the business adding the agreement should then request the sign it.
    //the party that is to sign the agreement should be sent through as the _signer
    function Agreement(address _owner, address _signer, address _ownerToken, uint _direction, uint _left, uint _right, bool _canPort) public {
        owner = _owner;
        signer = _signer;
        ownerToken = _ownerToken;
        direction = _direction;
        left = _left;
        right = _right;
        signed = false;
        canPort = _canPort;
    }
    //The _signer is the only party that can sign the agreement
    function signAgreement(address _signerToken) onlyBy(signer) public returns(bool) {
        signerToken = _signerToken;
        signed = true;
        return true;   
    }
    //This function returns the signer if the signer has signed
    //Can be used to demonstrate partnerships to customers of either the owner or the _signer
    function getSignedSigner() public view returns(address) {
        if (signed)
            return signerToken;
        return 0x0;
    }
    //This functions checks if the _signer is the intended signer and has not signed the agreement
    function amIUnsignedSigner(address _signer) public view returns(bool) {
        if (!signed) {
            if (signer == _signer)
                return true;
        }
        return false;
    }
    //This function is used by the port function to check whether it is a valid port
    function checkCredential(address _from) private view returns (bool) {
        return (direction == 2 || (direction == 0 && _from == owner) || (direction == 1 && _from == signer));
    }
    //This function prints out the state of the agreement 
    function getInfo() public view returns (address,address,address,address,uint,uint,uint,bool,bool) {
            
        return (owner,ownerToken,signer,signerToken,left,right,direction,signed,canPort);
    }
    //This function ports tokens between owner and _signer tokens for the customer account i.e. msg.sender
    function port(address _fromToken, uint amount, address me) external returns (bool) {
        require(canPort);
        require((_fromToken == ownerToken) || (_fromToken == signerToken));
        ThembaR tr = ThembaR(_fromToken);
        require(tr.balanceOf(msg.sender) >= amount);
        uint otherAmount;
        ThembaR otherAddress;
        bool blockUno = false;
        bool blockTwo = false;
        if (_fromToken == ownerToken && checkCredential(_fromToken)) {
            blockUno = true;
            otherAmount = amount*(right/left);
            otherAddress = ThembaR(signerToken);
            tr.specialTransfer(signer, amount, msg.sender, me);
            otherAddress.specialTransfer(msg.sender, otherAmount,signer,me);
        } else if (checkCredential(_fromToken)) {
            blockTwo = true;
            otherAmount = amount*(left/right);
            otherAddress = ThembaR(ownerToken);
            tr.specialTransfer(owner, amount, msg.sender, me);
            otherAddress.specialTransfer(msg.sender, otherAmount,owner, me);
        } 
        return true;
    }
    //This function ports the tokens between owner and _signer and pays the _to party ie the party in the agreement who is not _fromToken 
    function portAndPay(address _fromToken, uint amount) external returns (bool) {
        require((_fromToken == ownerToken) || (_fromToken == signerToken));
        ThembaR tr = ThembaR(_fromToken);
        require(tr.balanceOf(msg.sender) >= amount);
        if (_fromToken == ownerToken && checkCredential(_fromToken)) {
            tr.specialTransfer(signer, amount, msg.sender, this);          
        } else if (checkCredential(_fromToken)) {
            tr.specialTransfer(owner, amount, msg.sender, this);
        } 
    }
}
