import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-agreement',
  templateUrl: './approve-agreement.component.html',
  styleUrls: ['./approve-agreement.component.css']
})
export class ApproveAgreementComponent implements OnInit {

  constructor() { }

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

  partners = [
    {address: 'Test 1', viewValue: 'Harry Salon'},
    {address: 'Test 2', viewValue: 'Max Weeves'},
    {address: 'Test 3', viewValue: 'Big Mommy Cake Pillows'}
  ];
  selection = 3;
}

interface AgreementObj {
  owner: string;
  signer: string;
  direction: number;
  left: number;
  right: number;
  canport: boolean;
}