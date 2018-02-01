pragma solidity ^0.4.17;

contract ManageWallets {

    struct Wallets {
        uint walletId;
        string publicKey;
        string parentId;
    }
    
    uint walletNext = 1;

    Wallets[] public wallets;

    //Get Wallets Count
    function getWalletsCount() public constant returns(uint) {
        return wallets.length;
    }
    
    //Get Wallet Details. This function requires that you know the specific wallet Id
    function getWallet(uint index) public constant returns(uint, string, string) {
        return (wallets[index].walletId, wallets[index].publicKey, wallets[index].parentId);
    }
    //Assign Wallet to Entity. This function looks for unused wallet to assign to Refugee or Merchant
    function assignWallet(string _Id) public returns(uint, string, string) {
        
        uint _walletCount = getWalletsCount();
        require(_walletCount > 0);
        
            if (walletNext < 11) {
            wallets[walletNext].parentId = _Id;
            walletNext++;
            }
    return (wallets[walletNext].walletId, wallets[walletNext].publicKey, wallets[walletNext].parentId);
    }
    //Create Wallets from a list provided in Excel. No Private keys to be populated
    
    function ManageWallets(uint walletId, string publicKey, string parentId) {
        wallets.push(Wallets(1,"0xD0e6e246c0555beF877b90fA681D6960fE60Fed5","NULL"));
        wallets.push(Wallets(2,"0x20e788528b6Ed404B5470c1d2D38c52525206cbA","NULL"));
        wallets.push(Wallets(3,"0x39e23594E65f9f6fC2f65E4b57Ba265C9689e842","NULL"));
        wallets.push(Wallets(4,"0xe249e090572e4E27d1A06b641B1eEa59E0FB76E4","NULL"));
        wallets.push(Wallets(5,"0xc641E9d61884f0eE915302d18268Eb56a469f19C","NULL"));
        wallets.push(Wallets(6,"0x9EE7970df7036D9f15D0Ed133aBf8d58350CA899","NULL"));
        wallets.push(Wallets(7,"0x134Fe0811c1CcBa66c691C6fA01d2b6B553bedc9","NULL"));
        wallets.push(Wallets(8,"0x5ff1A0Ef1Fe5d6dF0756Abe28a3D8bF32c2F30Cc","NULL"));
        wallets.push(Wallets(9,"0x8D296e973f269563EC786fB1d834eB8E6784B3a5","NULL"));
        wallets.push(Wallets(10,"0xfFef7F850cD99a84d963C8089B6a9A5160101d0E","NULL"));
    }

}