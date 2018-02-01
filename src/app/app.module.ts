import { UtilModule } from './util/util.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCheckboxModule, MatDividerModule, MatGridList, MatGridListModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {ClientModule} from './client/client.module';
import { BusinessModule } from './business/business.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    ClientModule,
    BusinessModule,
    RouterModule.forRoot([
      {path: '', component:LoginComponent},
      {path: '**', component:NotFoundComponent}
    ]),
    UtilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


