import { WaterDropConnectionService } from './../water-drop-connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wd-issuer',
  templateUrl: './issuer.component.html',
  styleUrls: ['./issuer.component.scss']
})
export class IssuerComponent implements OnInit {

  public pricingForm: FormGroup;

  public myQuotation: any;
  public voucher: any;

  constructor(
    private waterDropConnection: WaterDropConnectionService,
    private formBuilder: FormBuilder
  ) {
    this.pricingForm = this.formBuilder.group({
      waterMeterAddress: ['', [Validators.required]],
      requestedLitres: [3000, [Validators.required]]
    });
  }

  async ngOnInit() {

  }

  public get pricingWaterMeterAddress() {
    return this.pricingForm.get('waterMeterAddress');
  }

  public get requestedLitres() {
    return this.pricingForm.get('requestedLitres');
  }

  public async requestPricing() {
    // const waterMeter = '0xf17f52151EbEF6C7334FAD080c5704D77216b732';
    const waterMeter = this.pricingWaterMeterAddress.value;
    const requestedLiters = this.requestedLitres.value;
    const res = await this.waterDropConnection.estimatePrice(waterMeter, requestedLiters);
    this.myQuotation = res;
  }

  public async purchaseVoucher() {
    // const waterMeter = '0xf17f52151EbEF6C7334FAD080c5704D77216b732';
    const waterMeter = this.pricingWaterMeterAddress.value;
    const requestedLiters = this.requestedLitres.value;
    const res = await this.waterDropConnection.buyVoucher(waterMeter, requestedLiters);
    this.voucher = res;
    this.pricingForm.reset();
    this.requestedLitres.setValue(3000);
  }

}
