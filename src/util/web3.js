import Web3 from 'web3';
import attestationContract from '../abis/Attestation.json';
import marketplaceContract from '../abis/Marketplace.json';

var web3;// = new Web3();


if (typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

export const getAttestationContract = () => {
  //var address = "0xba930bb471be501ee0ce7dc48edc2ea851b00ddd";

  //var address = "0xc4a24e29985031c5f0a7a518167c0b91f7d4638d";

  var address = "0x027f9dfe506d49b0636b61420731e0bae7fb9e3b";

  var contract = new web3.eth.Contract(attestationContract.abi, address);

  return contract;
}

export const getMarketplaceContract = () => {
  //var address = "0x456dda64fa1621122fba26177ba0bf4629a51c11";

  //var address = "0x81616acbdfcadedf33221a6b7437610c9fefdad6";

  var address = "0xc43ee53ecdaf83c7e9104e8b59fec06d75fdb2cc";

  var contract = new web3.eth.Contract(marketplaceContract.abi, address);

  return contract;
}

export default web3;
