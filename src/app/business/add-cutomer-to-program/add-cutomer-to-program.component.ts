import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cutomer-to-program',
  templateUrl: './add-cutomer-to-program.component.html',
  styleUrls: ['./add-cutomer-to-program.component.css']
})
export class AddCutomerToProgramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customer: CustomerObj = { 
    name: "",
    surname: "",
    cell: ""
  };
}

interface CustomerObj {
  name: string;
  surname: string;
  cell: string;
}