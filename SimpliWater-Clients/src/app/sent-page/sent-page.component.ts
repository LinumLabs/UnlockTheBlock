import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../calculation.service';

import {
  Router,
  NavigationExtras
} from '@angular/router';


@Component({
  selector: 'app-sent-page',
  templateUrl: './sent-page.component.html',
  styleUrls: ['./sent-page.component.css']
})
export class SentPageComponent implements OnInit {

  litres;
  randAmount;
  ETHAmount;

  constructor(public router: Router, private calculationService: CalculationService) {}

  ngOnInit() {
    this.litres = this.calculationService.getTransactionFigures()['litres'];
    this.randAmount = this.calculationService.getTransactionFigures()['rands'];
    this.ETHAmount = this.calculationService.getTransactionFigures()['eth'];
    console.log(this.calculationService.getTransactionFigures());
  }

  done() {
    this.router.navigate(["meter/"]);
  }

  more() {
    this.router.navigate(["buy/"]);
  }

}
