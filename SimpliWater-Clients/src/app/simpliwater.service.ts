import { Component, HostListener, NgZone, Injectable, EventEmitter } from '@angular/core';

const Web3 = require('web3');
const contract = require('truffle-contract');
const simpliWaterAtifacts = require('../../build/contracts/SimpliWaterToken.json');

// declare
var window: any;

@Injectable()
export class SimpliwaterService {

  SimpliWaterContract = contract(simpliWaterAtifacts);
  web3: any;
  accounts: any;
  admin_account: any;
  meter_account: any;

  insantiated: boolean;
  emitted: boolean;
  contractReady = new EventEmitter();
  meterStats: any = {};
  utilityConstants: any = {};



  constructor() {}

  checkAndInstantiateWeb3(_web3, currentProvider) {
    if (!this.insantiated) {
      console.log(_web3, currentProvider)
      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (_web3 !== 'undefined') {
        console.warn(
          'Using web3 detected from external source. If you find that your accounts don\'t appear or you have 0 MetaCoin, ensure you\'ve configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask'
        );
        // Use Mist/MetaMask's provider
        this.web3 = new Web3(currentProvider);
        this.initialize();
        this.insantiated = true;
      } else {
        console.warn(
          'No web3 detected. Falling back to http://localhost:7545. You should remove this fallback when you deploy live, as it\'s inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask'
        );
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        this.web3 = new Web3(
          new Web3.providers.HttpProvider('http://localhost:7545')
        );
        this.initialize();
        this.insantiated = true;
      }

    }
  };

  setMeterStats(_address, _occupants, _registrationEpoch, _balance, _usage) {
    this.meterStats.address = _address;
    this.meterStats.balance = _balance;
    this.meterStats.occupants = _occupants;
    this.meterStats.usage = _usage;
    this.meterStats.registrationEpoch = _registrationEpoch;
  }


  setUtilityConstants(_normalCharge, _penaltyCharge, _dailyLimit) {
    this.utilityConstants.normalCharge = _normalCharge;
    this.utilityConstants.penaltyCharge = _penaltyCharge;
    this.utilityConstants.dailyLimit = _dailyLimit;
  }

  getMeterStats() {
    return this.meterStats;
  }

  getUtilityConstants() {
    return this.utilityConstants;
  }

  getWeb3() {
    return this.web3;
  }

  getMeterAccount() {
    return this.meter_account;
  }

  getAdminAccount() {
    return this.admin_account;
  }

  initialize() {
    this.setProvider();
    this.getAccounts();
  }

  getAccounts() {
    this.web3.eth.getAccounts((err, accs) => {
      if (err != null) {
        alert('There was an error fetching your accounts.');
        return;
      }

      if (accs.length === 0) {
        alert(
          'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
        );
        return;
      }
      this.accounts = accs;
      this.admin_account = this.accounts[0];
      this.meter_account = "0xF719866EC4a89465b1255d11fD4Ea73C07846759";
      console.log("accounts: ", this.accounts);
      console.log("admin: ", this.admin_account);
      console.log("meter: ", this.meter_account);
      this.contractReady.emit();
      this.emitted = true;
    });

  }

  getSimpliWaterContract() {
    return this.SimpliWaterContract;
  }


  hasEmitted() {
    return this.emitted;
  }


  setProvider() {
    this.SimpliWaterContract.setProvider(this.web3.currentProvider);
  }
}
