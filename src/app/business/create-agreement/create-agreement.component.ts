import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-agreement',
  templateUrl: './create-agreement.component.html',
  styleUrls: ['./create-agreement.component.css']
})
export class CreateAgreementComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  agreement: AgreementObj = { 
    owner: "",
    signer: "",
    direction: 0,
    left: 0,
    right: 0,
    canport: false
  };

  ngOnInit() {
  }

  public directions = [
    {value: 0, viewValue: 'Company A to B'},
    {value: 1, viewValue: 'Bidirectional'},
    {value: 2, viewValue: 'Company B to A'}
  ];
}

interface AgreementObj {
  owner: string;
  signer: string;
  direction: number;
  left: number;
  right: number;
  canport: boolean;
}
