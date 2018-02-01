import { Component, OnInit, HostListener, NgZone } from '@angular/core';
import { SimpliwaterService } from '../simpliwater.service';
import { Observable } from 'rxjs';

import {
  Router,
  NavigationExtras,
  ActivatedRoute,
  ParamMap,
  Params
} from '@angular/router';



@Component({
  selector: 'app-meter-simulation',
  templateUrl: './meter-simulation.component.html',
  styleUrls: ['./meter-simulation.component.css']
})
export class MeterSimulationComponent implements OnInit {

  initialBalance;
  baseline;
  meterAddress;
  intervalSet;
  burnt;
  interval;

  constructor(private zone: NgZone, private route: ActivatedRoute, public router: Router, private simpliwaterService: SimpliwaterService) {}


  ngOnInit() {
    this.simpliwaterService.contractReady.subscribe(
      () => {
        console.log("ready");
        this.onReady();
      });
  }


  onReady() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.meterAddress = params['id'];
        this.listenToTransactionEvent(this.meterAddress);
      }
    });
    this.getBalance();
  }

  getBalance() {
    let meta;
    this.simpliwaterService.getSimpliWaterContract()
      .deployed()
      .then(instance => {
        meta = instance;
        return meta.retrieveMeterStats(this.meterAddress, { from: this.simpliwaterService.getAdminAccount() });
      })
      .then(value => {
        console.log(value);
        this.zone.run(() => {
          this.initialBalance = value[3];
          this.baseline = value[3];
          this.interval = setInterval(() => {
            if (this.initialBalance > 0) { this.initialBalance -= 1; } else if (this.initialBalance == 0) {
              clearInterval(this.interval);
              this.updateBalance();
            }
          }, 100);
        });
      })
      .catch(e => {
        console.log(e);
      });
  }


  updateBalance() {
    console.log("update balance");
    let meta;
    this.simpliwaterService.getSimpliWaterContract()
      .deployed()
      .then(instance => {
        meta = instance;
        return meta.burn(this.baseline, { from: this.simpliwaterService.getAdminAccount() });
      })
      .catch(e => {
        console.log(e);
      });
  }

  listenToTransactionEvent(meterAddress) {
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
            this.getBalance();
            console.log("Transaction to" + meterAddress + "has been confirmed.");
          }
        });
      })
      .catch(e => {
        console.log(e);
      });
  };


}
