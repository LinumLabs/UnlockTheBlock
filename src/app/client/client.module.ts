import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCardModule, MatDividerModule, MatGridListModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TokenComponent } from './token/token.component';
import { Token } from '@angular/compiler';

@NgModule({
  imports: [
    BrowserModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      {path: 'client', component:DashboardComponent},
      {path: 'token', component:TokenComponent}
    ])
  ],
  exports:[RouterModule],
  declarations: [DashboardComponent, TokenComponent]
})
export class ClientModule { }
