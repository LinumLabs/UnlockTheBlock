import { Component, OnInit } from '@angular/core';
import {Web3Service} from '../util/web3.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private web3Service: Web3Service) { 
    console.log(web3Service);
  }

  ngOnInit() {

  }

}
