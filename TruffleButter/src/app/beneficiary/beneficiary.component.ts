import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Web3Service } from '../_services/index'
const sifArtifacts = require('../../../build/contracts/SifCoin.json');
const contract = require('truffle-contract');
@Component({
    moduleId: module.id.toString(),
    templateUrl: 'beneficiary.component.html'
})

export class BeneficiaryComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    loggedin = false;
    balance = "0";
    SIFContract = contract(sifArtifacts);
    constructor(
        private route: ActivatedRoute,
        private router: Router, private web3Service: Web3Service) {
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
        this.SIFContract.setProvider(this.web3Service.web3.currentProvider);
    }

    getBalance() {
        try {
            this.loading = true;
            // this.balance = await this.web3Service.web3.eth.getBalance(this.model.address);
            this.SIFContract
                .deployed()
                .then(instance => {
                    const sif = instance;
 
                    sif.balanceOf.call(this.model.address).then(result => {

                        console.log(result);
                        this.balance = result;
                        this.loading = false;
                        console.log("after");

                    }).catch(result => {
                        console.log(result);
                    });

                    console.log(this.model.ngo[0]);

                })
                .catch(e => {
                    console.log(e);

                });
        } catch (err) {
            this.loading = false;
            console.log(err);
            
            this.balance = "Error: invalid address entered";
        }

    }
}


