import { Component, OnInit } from '@angular/core';
import { SimpliwaterService } from '../simpliwater.service';

import {
  Router,
  NavigationExtras
} from '@angular/router';

@Component({
  selector: 'app-meter-page',
  templateUrl: './meter-page.component.html',
  styleUrls: ['./meter-page.component.css']
})
export class MeterPageComponent implements OnInit {

  balance: number;
  stats: any;
  utilityConstants: any;

  meterAddress: string;
  navAddress: string;

  constructor(public router: Router, private simpliwaterService: SimpliwaterService) {}

  ngOnInit() {
    this.simpliwaterService.contractReady.subscribe(
      () => {
        console.log("ready");
        //use this to register meters for now, while still working on the admin portal
        this.registerMeter();
        //this.getMeterBalance();
      });
  }


  registerMeter = () => {
    console.log(this.simpliwaterService.getAdminAccount());
    let meta;
    this.simpliwaterService.getSimpliWaterContract()
      .deployed()
      .then(instance => {
        meta = instance;
        meta.registerMeter(this.simpliwaterService.getAdminAccount(), Date.now(), { from: this.simpliwaterService.getAdminAccount() });
      })
      .then(() => {
        console.log("registered");
      })
      .catch(e => {
        console.log(e);
      });
  };



  getMeterStats = () => {
    console.log(this.meterAddress);
    console.log(this.simpliwaterService.getAdminAccount());
    let meta;
    this.simpliwaterService.getSimpliWaterContract()
      .deployed()
      .then(instance => {
        meta = instance;
        return meta.retrieveMeterStats(this.meterAddress, { from: this.simpliwaterService.getAdminAccount() });
      })
      .then(value => {
        this.stats = value;
        console.log(this.stats);
        this.simpliwaterService.setMeterStats(this.stats[0], this.stats[1], this.stats[2], this.stats[3], this.stats[4]);
        this.getUtilityConstants();
      })
      .catch(e => {
        console.log(e);
      });
  };


  getUtilityConstants = () => {
    console.log(this.simpliwaterService.getAdminAccount());
    let meta;
    this.simpliwaterService.getSimpliWaterContract()
      .deployed()
      .then(instance => {
        meta = instance;
        return meta.retrieveUtilityConstants({ from: this.simpliwaterService.getAdminAccount() });
      })
      .then(value => {
        this.utilityConstants = value;
        console.log(this.utilityConstants);
        this.simpliwaterService.setUtilityConstants(this.utilityConstants[0], this.utilityConstants[1], this.utilityConstants[2]);
        this.router.navigate(["stats/", this.meterAddress]);
      })
      .catch(e => {
        console.log(e);
      });
  };


  getMeterBalance = () => {
    console.log(this.simpliwaterService.getAdminAccount());
    let meta;
    this.simpliwaterService.getSimpliWaterContract()
      .deployed()
      .then(instance => {
        meta = instance;
        return meta.balanceOf(this.simpliwaterService.getAdminAccount(), { from: this.simpliwaterService.getAdminAccount() });
      })
      .then(value => {
        this.balance = value;
        console.log(this.balance);
      })
      .catch(e => {
        console.log(e);
      });
  };

}
