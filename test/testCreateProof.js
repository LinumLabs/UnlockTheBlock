const CertStore = artifacts.require('./CertStore.sol')
const createKeccakHash = require('keccak')

contract('CertStore', function (accounts) {
    let contract;

    const admin = accounts[0];
    const university = accounts[1];

    before(async function(){
      contract = await CertStore.deployed();
    });

    it("Contract is deployed", async function() {
        assert(contract);  
    });

    it("Proof can be created", async function() {

        await contract.storeProof("UJ", "8205215089084", "ABCD1234", "BSC");
        assert(contract.verifyProof("UJ", "8205215089084", "ABCD1234", "BSC"));

    });

    // it("Proof can be supplied", async function() {
        
    //     let proofHash = keccak("UJ", "8205215089084", "ABCD1234", "BSC");

    //     await contract.storeProof("UJ", "8205215089084", "ABCD1234", "BSC");
    //     assert(contract.verifyProofByHash(proofHash));

    // });
})