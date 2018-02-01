import web3 from '../util/web3';
import getAccounts from '../util/get-accounts'

import {getAttestationContract} from '../util/web3.js';

const VERIFY_CLAIM = "VERIFY_CLAIM";
const VERIFY_CLAIM_INITIATED = "VERIFY_CLAIM_INITIATED";
const VERIFY_CLAIM_COMPLETED = "VERIFY_CLAIM_COMPLETED";
const GETTING_UNVERIFIED_CLAIMS = "GETTING_UNVERIFIED_CLAIMS";
const SET_UNVERIFIED_CLAIMS = "SET_UNVERIFIED_CLAIMS";

const initialState = { busy: true, verifying:false, unverifiedClaims: [], verifyClaimResult: null };

const verifyClaims = (state = initialState, action) => {
  switch (action.type){
  case GETTING_UNVERIFIED_CLAIMS:{
    return {...state, busy:true};
  }
  case SET_UNVERIFIED_CLAIMS:{
    return {...state, busy:false, unverifiedClaims: action.value};
  }
  case VERIFY_CLAIM_INITIATED:{
    var claim = state.unverifiedClaims.find(c => c.id == action.value);

    claim.verifying = true;

    return {...state, verifying:true};
  }
  case VERIFY_CLAIM_COMPLETED:{
    var changedUnverifiedClaims =  state.unverifiedClaims.filter(c => c.id != action.value);
    return {...state, verifying:false, unverifiedClaims: changedUnverifiedClaims};
  }
  default:{
    return state;
  }
  }
};

export default verifyClaims;

export function getUnverifiedClaims(){
  return async function(dispatch) {
    dispatch({type: GETTING_UNVERIFIED_CLAIMS});

    var contract = getAttestationContract();
    var accounts = await getAccounts();

    var orgAddress = accounts[0];

    var count = await contract.methods.getClaimsCount().call();

    var claims = [];

    for (var i = 0; i < count; i++){
      var claim = await contract.methods.claims(i).call();
      if (claim.organisation === accounts[0] ){
        claims.push({...claim, id: i, verifying:false});
      }
    }

    dispatch({type: SET_UNVERIFIED_CLAIMS, value: claims.reverse()});
  }
}

//await contract.addClaim(name, org, claimant, true, uportId);
export function verifyClaim(id) {
  return async function(dispatch){
    console.log('verifying claim');
    dispatch({type: VERIFY_CLAIM_INITIATED, value: id});
    var accounts = await web3.eth.getAccounts();
    var address = accounts[0];

    var contract = getAttestationContract();

    contract.methods.verifyClaim(id).send({from: accounts[0]})
      .on('transactionHash', function(transactionHash){
        dispatch({type: VERIFY_CLAIM_COMPLETED, value: transactionHash, id: id});
        })
      .on('receipt', function(receipt){
        console.log(receipt);
      })
      .on('confirmation', function(confirmationNumber, receipt){
        console.log('confirmed', receipt);
      })
      .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
      });


  };
}

// export function attest(uportId, credentialName, credentialValue) {
//   return async function(dispatch) {

//     const toAttest = {
//       sub: uportId,
//       claim: { credentialName: credentialValue }
//     };

//     try{
//       var attest = await uport.attestCredentials(toAttest);

//       //dispatch({});
//     }catch(e){
//       console.log('attest error', e);
//     }
//   }
// }
