import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
const Web3 = require('web3');
const contract = require('truffle-contract');
const ngoArtifacts = require('../../../build/contracts/NGO.json');
const bankArtifacts = require('../../../build/contracts/Bank.json');
const sifArtifacts = require('../../../build/contracts/SifCoin.json');

declare var window: any;

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'bank.component.html'
})

export class BankComponent implements OnInit {
  BankContract = contract(bankArtifacts);
  SIFContract = contract(sifArtifacts);

    account: any;
    accounts: any;
    web3: any;
    status: string;
    model: any = {};
    loading = false;
    returnUrl: string;
    loggedin = false;
    transactionHash: any;

    public scatterChartLabels: string[] = ['BEN'];

    public scatterChartData: any[] = [ ];
    public scatterChartType: string = 'scatter';

    constructor(
        private route: ActivatedRoute,
        private router: Router) {
            if (localStorage.getItem('currentUser')) {
                // logged in so return true
                this.loggedin = true;

            }
            else {
                this.loggedin = false;
                this.router.navigate(['/login']);
            }
    }

    ngOnInit() {
        // reset login status
        this.checkAndInstantiateWeb3();
        this.onReady();
    };
    

    checkAndInstantiateWeb3 = () => {
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.web3 !== 'undefined') {
          console.warn(
            'Using web3 detected from external source. If you find that your accounts don\'t appear or you have 0 MetaCoin, ensure you\'ve configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask'
          );
          // Use Mist/MetaMask's provider
          this.web3 = new Web3(window.web3.currentProvider);
        } else {
          console.warn(
            'No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it\'s inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask'
          );
          // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
          this.web3 = new Web3(
            new Web3.providers.HttpProvider('http://localhost:7545')
          );
        }
      this.SIFContract.setProvider(this.web3.currentProvider);
 
        let self = this;
 
        this.SIFContract
          .deployed()
          .then(instance => {
            const sif = instance;
            const transferEvent = sif.Transfer({ fromBlock: 0, toBlock: 'latest' });
            transferEvent.watch(function (error, result) {
              console.log(result);
            });

            const mintEvent = sif.Mint({ fromBlock: 0, toBlock: 'latest' });
            mintEvent.watch(function (error, result) {
              console.log(result);
              // alert();
              const amount = result.args.amount.toString();
              self.web3.eth.getBlock(result.blockHash, function(e, r) {
                  const time = r.timestamp;
                console.log(r.timestamp);
                  
                  self.scatterChartData.push({x: time, y: amount});
                
              });
               
              
            });
          }).catch(e => {
            console.log(e);
          });
      }

    onReady = () => {
       
      };

      setStatus = message => {
        this.status = message;
      };

    allocateTokens() {
      this.loading = true;
        this.setStatus('Initiating transaction... (please wait)');
        let sif;
        this.SIFContract
          .deployed()
          .then(instance => {
            sif = instance;
            console.log(sif);
            console.log("Sending tokens to NGO " + this.model.ngo[0]);
            console.log(window.web3);
            console.log(this.web3);
            sif.mint(this.web3.eth.accounts[0], this.model.tokens, { from: this.web3.eth.accounts[0], contractAddress: "0xf17f52151EbEF6C7334FAD080c5704D77216b732"}).then(result => {

              this.transactionHash = result.tx;
              console.log("after");
              
            }).catch(result => {
              console.log(result);
            });
             
            console.log(this.model.ngo[0]);

          })
          .catch(e => {
            console.log(e);
           
          });
      this.loading = false;
    }

    
}

