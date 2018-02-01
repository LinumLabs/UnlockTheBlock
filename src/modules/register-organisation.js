//import { web3 } from '../util/connectors.js';
import attestationContract from '../abis/Attestation.json';
import Web3 from 'web3';
import Accounts from 'web3-eth-accounts';

import { getAttestationContract } from '../util/web3.js';

const ADD_ORG_ERROR = "ADD_ORG_ERROR";
const ADD_ORG_INITIATED = "ADD_ORG_INITIATED";
const ADD_ORG_COMPLETED = "ADD_ORG_COMPLETED";
const ADD_ORG_ACCEPTED = "ADD_ORG_ACCEPTED";

const initialState = { busy: false  };

const registerOrganisation = (state = initialState, action) => {
  switch (action.type){
  case ADD_ORG_INITIATED:{
    return {...state, busy: true};
  }
  case ADD_ORG_ACCEPTED:{
    return {...state, busy:false, result: action.value};
  }
  case ADD_ORG_COMPLETED:{
    return {...state, busy:false, txid: action.value};
  }
  case ADD_ORG_ERROR:{
    return {...state, busy: false, error: action.error};
  }
  default:
    return state;
  }
}

export default registerOrganisation;

var web3;// = new Web3();

if (typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

// async function MyContractSetup () {
//   let MyContractABI = new web3.eth.Contract(attestationContract.abi);
//   //let MyContractObj = MyContractABI.at("0x12334cFF2F19cc1a86FDfb7c1516242dF75ecE9e");
//   return MyContractObj;
// }

export const registerOrg = (uportId, name, registrationNumber) => {
  return async dispatch => {
    var accounts = new Accounts(web3);

    var contract = new web3.eth.Contract(attestationContract.abi, "0x12334cFF2F19cc1a86FDfb7c1516242dF75ecE9e");

    var contract = getAttestationContract();

    dispatch({type: ADD_ORG_INITIATED});
    web3.eth.getAccounts(function(err, accounts){
      contract.methods.addOrganisation(uportId, name, registrationNumber)
        .send({from: accounts[0]}, function(err, res) {
        if (err){
          alert("oops, something went wrong", err.message);
          dispatch({type: ADD_ORG_ERROR, error: err});
          return;
        }
        dispatch({type: ADD_ORG_COMPLETED, value: res});
        dispatch({type: "SET_USER_AS_ORG"});
      });

    });


    // web3.net.getListening(function(a,c) {
    //   console.log('c', c);
    // });

    //let StatusContract = contract(require('../abis/Attestation.json'));
    //StatusContract.setProvider(web3.currentProvider);
    //const MyContract = await MyContractSetup();

    //let address = web3.eth.defaultAccount;
    //console.log("web3.eth.defaultAccount:"+address);

    //let statusContractInstance;
    //var c = await StatusContract.deployed();
    //console.log("c = ", c);

    // var add = await MyContract.addOrganisation(uportId, name, registrationNumber, function(err, res) {
    //   console.log('err', err);
    //   console.log('r',res);
    // });
  };
}
