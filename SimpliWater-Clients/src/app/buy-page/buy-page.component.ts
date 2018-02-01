import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { SimpliwaterService } from '../simpliwater.service';
import { CalculationService } from '../calculation.service';
import { ChangeDetectorRef } from '@angular/core';



import {
  Router,
  NavigationExtras
} from '@angular/router';


@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {

  amountRands;
  calculatedEth;
  meterAddress: string;
  calculatedTokens;
  listening: boolean;

  constructor(public router: Router, private simpliwaterService: SimpliwaterService, private calculationService: CalculationService, private cdRef: ChangeDetectorRef) {

  }

  ngAfterViewChecked() {
    this.calculatedTokens = this.calculationService.calculateTokens(this.amountRands);
    console.log(this.amountRands);
    this.cdRef.detectChanges();
  }

  ngOnInit() {}

  //TODO: ensure that when we use this it does not cause an interruption to the user flow
  //figure out why we are receiving multiple events for the same transaction. the block numbers are different though but values are the same.
  listenToTransactionEvent(meterAddress) {
    if (!this.listening) {
      console.log("listening");
      let meta;
      this.simpliwaterService.getSimpliWaterContract()
        .deployed()
        .then(instance => {
          meta = instance;
          console.log();
          meta.Transfer({ fromBlock: 'latest' }).watch(function(error, result) {
            console.log(result);
            console.log(result.args.to, meterAddress)
            if (result.args.to == meterAddress) {
              alert("Transaction to" + meterAddress + "has been confirmed.");
            }
          });
        })
        .catch(e => {
          console.log(e);
        });
      this.listening = true;
    }
  };


  topUpWithEth() {
    console.log(this.simpliwaterService.getAdminAccount());
    let meta;
    this.simpliwaterService.getSimpliWaterContract()
      .deployed()
      .then(instance => {
        meta = instance;
        meta.topUpBalanceWithEther(this.meterAddress, this.calculationService.calculateTokens(this.amountRands), { value: this.calculationService.calculateWEI(this.amountRands), from: this.simpliwaterService.getAdminAccount() });
      })
      .then(() => {
        //for now if there are no errors go to the success page
        console.log("sent transaction");
        this.router.navigate(["sent/", this.meterAddress]);
      })
      .catch(e => {
        console.log(e);
      });
  };


}
