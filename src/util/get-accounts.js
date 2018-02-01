import Accounts from 'web3-eth-accounts';
import Web3 from 'web3';

const getAccounts = () => {
  return new Promise((resolve,reject) => {
    var web3;// = new Web3();

    if (typeof window.web3 !== 'undefined') {
      web3 = new Web3(window.web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    }

    web3.eth.getAccounts(function(err, accounts){
      if(err) reject(err);
      else if(accounts.length === 0){
        alert('Please ensure you have a web3 provider (Metamask / Mist) running.');
        resolve([]);
      }
      else resolve(accounts);
    });
  });
}

export default getAccounts;
