import { uport } from '../util/connectors.js';
import web3 from '../util/web3';
import getAccounts from '../util/get-accounts'

import {getAttestationContract} from '../util/web3.js';

const SET_ORGANISATIONS = "SET_ORGANISATIONS";
const GETTING_ORGANISATIONS = "GETTING_ORGANISATIONS";
const ADDING_CLAIM = "ADDING_CLAIM";
const CLAIM_ADDED = "CLAIM_ADDED";

const initialState = { loading: true, addingClaim:false, claimAddedResult:null, organisations: [] };

const claims = (state = initialState, action) => {
  switch (action.type){
  case ADDING_CLAIM:{
    return {...state, addingClaim:true};
  }
  case CLAIM_ADDED:{
    return {...state, addingClaim:false, loading:false, claimAddedResult: action.value};
  }
  case GETTING_ORGANISATIONS:{
    return {...state, loading:true};
  }
  case SET_ORGANISATIONS:{
    return {...state, organisations: action.value, loading: false};
  }
  default:{
    return state;
  }
  }
};

export default claims;

export function getOrganisations(){
  return async function(dispatch) {

    dispatch({type: GETTING_ORGANISATIONS});
    var contract;

    try{
      var contract = getAttestationContract();
    }catch(e){
      alert('could not get contract', e);
      return;
    }

    var accounts = await getAccounts();

    var count = await contract.methods.getOrgsCount().call();

    var organisations = [];

    for (var i = 0; i < count; i++){
      try{
        var org = await contract.methods.orgs(i).call({from: accounts[0]});
        if (org.name && org.owner){
          if (!organisations.find(o => o.name == org.name)){ // removing duplicates, should be done on insert instead
            organisations.push({name:org.name, orgAddress:org.owner, uportId: org.uportId, registrationNumber: org.registrationNumber});
          }
        }
      }catch(e){
        console.log(e);
      }
    }

    dispatch({type: SET_ORGANISATIONS, value: organisations});

  }
}

export function addClaim(name,claimantName, orgAddress, isPublic, uportId) {
  return async function(dispatch){
    dispatch({type:ADDING_CLAIM});
    var accounts = await web3.eth.getAccounts();
    var address = accounts[0];

    var contract = getAttestationContract();

    var res = await contract.methods.addClaim(name,claimantName, orgAddress, address, isPublic, uportId).send({from: accounts[0]})
      .on('transactionHash', function(transactionHash){
        dispatch({type:CLAIM_ADDED, value:res});
      })
      .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
      })
          .catch(e => {
            console.log(e);
          });
  }
}
