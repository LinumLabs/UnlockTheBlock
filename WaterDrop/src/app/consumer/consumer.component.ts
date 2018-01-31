import { Component, OnInit } from '@angular/core';
import { WaterDropConnectionService } from '../water-drop-connection.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'wd-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {

  public allowanceForm: FormGroup;
  public pricingForm: FormGroup;

  public myAllowance = -1;
  public myQuotation: any;

  constructor(
    private waterDropConnection: WaterDropConnectionService,
    private formBuilder: FormBuilder
  ) {
    this.allowanceForm = this.formBuilder.group({
      waterMeterAddress: ['', [Validators.required]]
    });

    this.pricingForm = this.formBuilder.group({
      waterMeterAddress: ['', [Validators.required]],
      requestedLitres: [3000, [Validators.required]]
    });
  }

  async ngOnInit() {

  }

  public get allowanceWaterMeterAddress() {
    return this.allowanceForm.get('waterMeterAddress');
  }

  public get pricingWaterMeterAddress() {
    return this.pricingForm.get('waterMeterAddress');
  }

  public get requestedLitres() {
    return this.pricingForm.get('requestedLitres');
  }

  public async requestAllowance() {
    // const waterMeter = '0xf17f52151EbEF6C7334FAD080c5704D77216b732';
    const waterMeter = this.allowanceWaterMeterAddress.value;
    const res = await this.waterDropConnection.getMyCurrentWaterAllowance(waterMeter);
    this.myAllowance = res;
  }

  public async requestPricing() {
    // const waterMeter = '0xf17f52151EbEF6C7334FAD080c5704D77216b732';
    const waterMeter = this.pricingWaterMeterAddress.value;
    const requestedLiters = this.requestedLitres.value;
    const res = await this.waterDropConnection.estimatePrice(waterMeter, requestedLiters);
    this.myQuotation = res;
    this.pricingForm.reset();
    this.requestedLitres.setValue(3000);
  }

}
