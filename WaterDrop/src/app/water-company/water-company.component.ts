import { WaterDropConnectionService } from './../water-drop-connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wd-water-company',
  templateUrl: './water-company.component.html',
  styleUrls: ['./water-company.component.scss']
})
export class WaterCompanyComponent implements OnInit {

  public waterMeterForm: FormGroup;

  public transaction;

  constructor(
    private waterDropConnection: WaterDropConnectionService,
    private formBuilder: FormBuilder
  ) {
    this.waterMeterForm = this.formBuilder.group({
      waterMeterAddress: ['', [Validators.required]],
      householdAddress: [''],
      householdHeadcount: [null, [Validators.required, Validators.min(1)]]
    });
  }

  async ngOnInit() {

  }

  public get waterMeterAddress() {
    return this.waterMeterForm.get('waterMeterAddress');
  }

  public get householdHeadCount() {
    return this.waterMeterForm.get('householdHeadcount');
  }


  public async addWaterMeter() {
    const res = await this.waterDropConnection.addWaterMeter(this.waterMeterAddress.value, this.householdHeadCount.value);
    this.transaction = res;
    this.waterMeterForm.reset();
  }

}
