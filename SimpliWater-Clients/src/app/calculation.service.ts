import { Injectable } from '@angular/core';
import { SimpliwaterService } from './simpliwater.service';

@Injectable()
export class CalculationService {

  //TODO: get the live exchange rate via an API; in future

  RAND_ETH_EXCHANGE_RATE = 12000;
  normalPricePerLiter;
  penaltyPricePerLiter;
  dailyLimit;
  days;
  allowed;
  used;
  transactionFigures = {};

  constructor(private simpliwaterService: SimpliwaterService) {}


  calculateETH = (amountRands) => {
    return (amountRands) ? amountRands / this.getETHRandConversion() : 0;
  }

  calculateWEI = (amountRands) => {
    return this.calculateETH(amountRands) * Math.pow(10, 18);
  }

  getETHRandConversion = () => {
    return this.RAND_ETH_EXCHANGE_RATE;
  }

  howManyDays = () => {
    let currentTime = Date.now();
    let meterEpochTime = this.simpliwaterService.getMeterStats().registrationEpoch;
    console.log("days", (currentTime - meterEpochTime) / 86400000);
    return (currentTime - meterEpochTime) / 86400000;
  }

  usagePerDay = () => {
    return this.simpliwaterService.getUtilityConstants().usage > 0 ? this.simpliwaterService.getUtilityConstants().usage / this.howManyDays() : 0;
  }

  setVariables() {
    this.normalPricePerLiter = this.simpliwaterService.getUtilityConstants().normalCharge / 1000;
    this.penaltyPricePerLiter = this.simpliwaterService.getUtilityConstants().penaltyCharge / 1000;
    this.dailyLimit = this.simpliwaterService.getUtilityConstants().dailyLimit / 1000;
    this.days = Math.ceil(this.howManyDays());
    this.allowed = this.dailyLimit * this.days;
    this.used = this.simpliwaterService.getMeterStats().usage;
    console.log(this.normalPricePerLiter, this.penaltyPricePerLiter, this.dailyLimit, this.days, this.allowed, this.used);
  }

  getTransactionFigures() {
    return this.transactionFigures;
  }

  calculateTokens = (amount: number) => {
    this.setVariables();
    let value = 0;
    //If they have used more than what they were recommended to use
    console.log(amount, (this.normalPricePerLiter * (this.allowed - this.used)));
    if (amount > (this.normalPricePerLiter * (this.allowed - this.used))) {
      value = (amount + (this.allowed * this.penaltyPricePerLiter) - (this.used * this.penaltyPricePerLiter)) / (this.normalPricePerLiter + this.penaltyPricePerLiter);
    } else {
      //If they are still within their limits
      value = (amount / this.normalPricePerLiter);
    }

    this.transactionFigures = {
      litres: value,
      rands: amount,
      eth: this.calculateETH(amount)
    };

    return (value) ? value.toFixed(0) : 0;
  }


}
