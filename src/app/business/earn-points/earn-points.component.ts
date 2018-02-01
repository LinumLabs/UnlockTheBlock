import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-earn-points',
  templateUrl: './earn-points.component.html',
  styleUrls: ['./earn-points.component.css']
})
export class EarnPointsComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnInit() {
  }

  partners = [
    {address: 'Test 1', viewValue: 'Harry Salon'},
    {address: 'Test 2', viewValue: 'Max Weeves'},
    {address: 'Test 3', viewValue: 'Three'}
  ];
  selection = 3;

  customers = [
    {address: 'Tom', viewValue: 'Biggus Dickus'},
    {address: 'Dick', viewValue: 'Bruce Lee'},
    {address: 'Harry', viewValue: 'Harry Potter'}
  ];
  custSelection = 3;
}
