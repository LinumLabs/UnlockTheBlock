import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
  ngOnInit() {
  }
  partners = [
    {address: 'Test 1', viewValue: 'Bags for Hands'},
    {address: 'Test 2', viewValue: 'Mr Coffee Bean'},
    {address: 'Test 3', viewValue: 'Beanbag Mash'}
  ];
  selection = 1;
}
