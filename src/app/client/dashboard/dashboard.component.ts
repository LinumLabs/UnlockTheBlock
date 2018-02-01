import { Component, OnInit } from '@angular/core';
import * as customers from '../../../../test/customers.json';
import * as companies from '../../../../test/businesses.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customer: any;



  constructor() { }

  ngOnInit() {
    this.getCustomerInfo();
  }

  getCustomerInfo = function () {
    let address = "0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef";
    /****************************************************************************************************************/
    //This must be replaced with getting the details of the currently logged in customer from IPFS based on address
    for (let i of <any>customers) {
        if(i.address == address){
            this.customer = i;
            for(let c of <any>this.customer.companies)
                for(let p of <any>companies)
                {
                    if(p.address == c.address)
                    {
                      c.symbol = p.symbol;
                      c.name = p.name;
                      c.logo = p.logo;
                    }
                }
        }
    }
    /****************************************************************************************************************/
    

  }

  



  getCustomerBusiness(address: string) {

  }

}

