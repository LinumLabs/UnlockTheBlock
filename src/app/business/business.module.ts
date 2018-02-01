import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatDividerModule, MatGridListModule, MatFormFieldModule, MatSnackBar, MatSnackBarModule, MAT_LABEL_GLOBAL_OPTIONS, MatOptionModule, MatSelectModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import { UtilModule } from '../util/util.module';
import { MainComponent } from './main/main.component';
import { CustomersComponent } from './customers/customers.component';
import { PartnersComponent } from './partners/partners.component';
import { RegisterComponent } from './register/register.component';
import { CreateAgreementComponent } from './create-agreement/create-agreement.component';
import { ApproveAgreementComponent } from './approve-agreement/approve-agreement.component';
import { EarnPointsComponent } from './earn-points/earn-points.component';
import { AddCutomerToProgramComponent } from './add-cutomer-to-program/add-cutomer-to-program.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      {path: 'business', component:MainComponent},
      {path: 'customers', component:CustomersComponent},
      {path: 'partners', component:PartnersComponent},
      {path: 'register', component:RegisterComponent},
      {path: 'create-agreement', component:CreateAgreementComponent},
      {path: 'approve-agreement', component:ApproveAgreementComponent},
      {path: 'earn-points', component:EarnPointsComponent},
      {path: 'add-customer-to-program', component:AddCutomerToProgramComponent}
    ]),
    UtilModule
  ],
  declarations: [MainComponent, CustomersComponent, PartnersComponent, RegisterComponent, CreateAgreementComponent, ApproveAgreementComponent, EarnPointsComponent, AddCutomerToProgramComponent],
  providers:[],
  exports:[MainComponent, CustomersComponent, PartnersComponent, RegisterComponent, CreateAgreementComponent, ApproveAgreementComponent, EarnPointsComponent, AddCutomerToProgramComponent]
})
export class BusinessModule { }
