import { Injectable, OnInit, HostListener, NgZone } from '@angular/core';
const Web3 = require('web3');
const contract = require('truffle-contract');
declare var window: any;

@Injectable()
export class Web3Service implements OnInit {
    private myValue;
    public web3: any;

    constructor() { 
        this.ngOnInit();
    }

    @HostListener('window:load')
    ngOnInit() {
        // alert("WTF");
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this.web3 = new Web3(window.web3.currentProvider);
        } else {
            console.warn(
                'No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it\'s inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask'
            );
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            this.web3 = new Web3(
                new Web3.providers.HttpProvider('http://localhost:8545')
            );
            
        }
         
    };
}
