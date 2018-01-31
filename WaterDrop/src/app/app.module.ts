import { WaterDropConnectionService } from './water-drop-connection.service';
import { Web3ConnectionService } from './web3-connection.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IssuerComponent } from './issuer/issuer.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { WaterCompanyComponent } from './water-company/water-company.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IssuerComponent,
    ConsumerComponent,
    WaterCompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Web3ConnectionService,
    WaterDropConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
