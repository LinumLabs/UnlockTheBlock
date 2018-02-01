import web3 from '../util/web3';
import getAccounts from '../util/get-accounts'

import {getAttestationContract, getMarketplaceContract} from '../util/web3.js';

const SUBMIT_JOB_OFFER_INITIATED = "SUBMIT_JOB_OFFER_INITIATED";
const SUBMIT_JOB_OFFER_COMPLETED = "SUBMIT_JOB_OFFER_COMPLETED";
const GETTING_MY_JOB_OFFERS = "GETTING_MY_JOB_OFFERS";
const GETTING_OPEN_JOB_OFFERS = "GETTING_OPEN_JOB_OFFERS";
const SET_MY_JOB_OFFERS = "SET_MY_JOB_OFFERS";
const SET_OPEN_JOB_OFFERS = "SET_OPEN_JOB_OFFERS";
const CLEAR = "CLEAR";
const APPLY_JOB_INITIATED = "APPLY_JOB_INITIATED";
const APPLY_JOB_COMPLETED = "APPLY_JOB_COMPLETED";
const ACCEPT_JOB_INITIATED = "ACCEPT_JOB_INITIATED";
const ACCEPT_JOB_COMPLETED = "ACCEPT_JOB_COMPLETED";

const initialState = { busy: false,
                       gettingJobOffers:false,
                       submittedJobResult:null,
                       myJobOffers:[],
                       openJobOffers:[],
                       submittedRequestResult:null,
                       applyingForJob:false,
                       applyForJobResult: null
                     };

const jobOffers = (state = initialState, action) => {
  switch (action.type){
  case CLEAR: {
    return {...initialState};
  }
  case ACCEPT_JOB_INITIATED:{
    return {...state, busy:true};
  }
  case ACCEPT_JOB_COMPLETED:{
    return {...state, busy:false, submittedJobResult: action.value};
  }
  case SUBMIT_JOB_OFFER_INITIATED:{
    return {...state, busy:true};
  }
  case SUBMIT_JOB_OFFER_COMPLETED:{
    return {...state, busy:false, submittedJobResult: action.value};
  }
  case GETTING_MY_JOB_OFFERS:{
    return {...state, gettingJobOffers:true};
  }
  case SET_MY_JOB_OFFERS:{
    return {...state, gettingJobOffers: false, myJobOffers: action.value};
  }
  case GETTING_OPEN_JOB_OFFERS:{
    return {...state, gettingJobOffers:true};
  }
  case SET_OPEN_JOB_OFFERS:{
    return {...state, gettingJobOffers: false, openJobOffers: action.value};
  }
  case APPLY_JOB_INITIATED:{
    return {...state, applyingForJob: true};
  }
  case APPLY_JOB_COMPLETED:{
    return {...state, applyingForJob: false, applyForJobResult: action.value};
  }
  default:{
    return state;
  }
  }
};

export default jobOffers;


export function getAllOpenJobOffers(){
  return async function(dispatch) {
    dispatch({type: GETTING_OPEN_JOB_OFFERS});

    var contract = getMarketplaceContract();
    var accounts = await getAccounts();

    var orgAddress = accounts[0];

    var count = await contract.methods.getJobsCount().call();

    var jobs = [];

    for (var i = 0; i < count; i++){
      var job = await contract.methods.jobs(i).call();
      if (job.request == "0x0000000000000000000000000000000000000000"){
        jobs.push({...job, id: i,paymentAmount: web3.utils.fromWei(job.paymentAmountInWei.toString(), 'ether'), myJob: job.provider === orgAddress});
      }
    }

    dispatch({type: SET_OPEN_JOB_OFFERS, value: jobs.reverse()});
  }
}


export function getMyJobOffers(){
  return async function(dispatch) {
    dispatch({type: GETTING_MY_JOB_OFFERS});

    var contract = getMarketplaceContract();
    var accounts = await getAccounts();

    var orgAddress = accounts[0];

    var count = await contract.methods.getJobsCount().call();

    var jobs = [];

    for (var i = 0; i < count; i++){
      var job = await contract.methods.jobs(i).call();
      if (job.provider === accounts[0]){
        jobs.push({...job, id: i,paymentAmount: web3.utils.fromWei(job.paymentAmountInWei.toString(), 'ether'),  hasRequest: job.request != "0x0000000000000000000000000000000000000000" });
      }
    }

    dispatch({type: SET_MY_JOB_OFFERS, value: jobs.reverse()});
  }
}

export function clear() {
  return async function(dispatch){
    dispatch({type: CLEAR});
  }
}


export function finishJob(id, paymentAmount) {
  return async function(dispatch){
    debugger;

    dispatch({type: ACCEPT_JOB_INITIATED});

    var accounts = await web3.eth.getAccounts();
    var address = accounts[0];

    var contract = getMarketplaceContract();

    contract.methods.finishJob(id).send({from: accounts[0]})
      .on('transactionHash', function(transactionHash){
        dispatch({type: ACCEPT_JOB_COMPLETED, value: transactionHash});
      })
      .on('receipt', function(receipt){
        console.log(receipt);
      })
      .on('confirmation', function(confirmationNumber, receipt){
      })
      .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
      });
  };
}

export function acceptJob(id, paymentAmount) {
  return async function(dispatch){
    debugger;

    dispatch({type: ACCEPT_JOB_INITIATED});

    var accounts = await web3.eth.getAccounts();
    var address = accounts[0];

    var contract = getMarketplaceContract();

    contract.methods.acceptJob(id).send({from: accounts[0], value: paymentAmount })
      .on('transactionHash', function(transactionHash){
        dispatch({type: ACCEPT_JOB_COMPLETED, value: transactionHash});
      })
      .on('receipt', function(receipt){
        console.log(receipt);
      })
      .on('confirmation', function(confirmationNumber, receipt){
      })
      .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
      });
  };
}


export function applyForJob(id) {
  return async function(dispatch){

    dispatch({type: APPLY_JOB_INITIATED});

    var accounts = await web3.eth.getAccounts();
    var address = accounts[0];

    var contract = getMarketplaceContract();

    contract.methods.requestJob(id).send({from: accounts[0]})
      .on('transactionHash', function(transactionHash){
        dispatch({type: APPLY_JOB_COMPLETED, value: transactionHash});
        })
      .on('receipt', function(receipt){
        console.log(receipt);
      })
      .on('confirmation', function(confirmationNumber, receipt){
        // if (confirmationNumber === 1){
        //   //dispatch(getMyJobOffers());
        // }
      })
      .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
      });
  };
}


//this.state.title,this.state.description, this.state.providerName, this.state.paymentAmount, uportId
export function addJob(title, description, providerName, paymentAmount, uportId) {
  return async function(dispatch){

    dispatch({type: SUBMIT_JOB_OFFER_INITIATED});

    var accounts = await web3.eth.getAccounts();
    var address = accounts[0];

    var contract = getMarketplaceContract();

    var amountInWei = web3.utils.toWei(paymentAmount.toString(), 'ether');

    contract.methods.addJobOffer(title, description, providerName, amountInWei, uportId).send({from: accounts[0]})
      .on('transactionHash', function(transactionHash){
        dispatch({type: SUBMIT_JOB_OFFER_COMPLETED, value: transactionHash});
        })
      .on('receipt', function(receipt){
        console.log(receipt);
      })
      .on('confirmation', function(confirmationNumber, receipt){
        if (confirmationNumber === 1){
          dispatch(getMyJobOffers());
        }
      })
      .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
      });
  };
}
