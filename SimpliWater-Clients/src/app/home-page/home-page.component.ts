import { Component, OnInit, NgZone } from '@angular/core';
import { SimpliwaterService } from '../simpliwater.service';
import { CalculationService } from '../calculation.service';

import {
  Router,
  NavigationExtras
} from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  meterStats: any;
  utilityStats: any;
  dailyLimit: number;

  constructor(private _ngZone: NgZone, public router: Router, private simpliwaterService: SimpliwaterService, private calculationService: CalculationService) {}

  ngOnInit() {
    this.meterStats = this.simpliwaterService.getMeterStats();
    console.log(this.meterStats);
    if (this.simpliwaterService.hasEmitted()) {
      this.utilityStats = this.simpliwaterService.getUtilityConstants();
      console.log(this.simpliwaterService.getUtilityConstants());
    } else {
      this.simpliwaterService.contractReady.subscribe(
        () => {
          console.log("ready");
          this.utilityStats = this.simpliwaterService.getUtilityConstants();
        });
    }
  }

  buyTokens() {
    this.router.navigate(["buy/"]);
  }

}
