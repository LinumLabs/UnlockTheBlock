import { Component, OnInit } from '@angular/core';
import {Web3Service} from '../../util/web3.service';
import controller_artifacts from '../../../../build/contracts/ThembaRController.json';
import token_artifacts from '../../../../build/contracts/ThembaR.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ThembaRController: any;
  ThembaR: any;
  status = '';

  constructor(private web3Service: Web3Service) { 
    console.log('Constructor: ' + web3Service);
  }
  
  company: CompanyObj = { 
    name: "",
    loyalty: "",
    unit: "",
    symbol: "",
    logo: ""
  };

  ngOnInit() {
    this.web3Service.artifactsToContract(controller_artifacts)
      .then((ControllerAbstraction) => {
        this.ThembaRController = ControllerAbstraction;
      });
    this.web3Service.artifactsToContract(token_artifacts)
    .then((ThembarAbstraction) => {
      this.ThembaR = ThembarAbstraction;
    });
  }

  setStatus(status) {
    this.status = status;
  }

  async registerToken() {
    if (!this.ThembaRController || ! this.ThembaR) {
      this.setStatus('ThembaR Controller or ThembaR could not be loaded. Check MetaMask');
      return;
    }

    const program = this.company.loyalty;
    const symbol = this.company.symbol;
    
    this.setStatus('Initiating transaction... (please wait)');
    try {
      const deployedController = await this.ThembaRController.deployed();
      const deployedThembaR = await this.ThembaR.deployed();
      const transaction = await deployedController.createBizToken(program,symbol)

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        var tokenArray = await deployedController.getAllTokens();
        var newToken = await deployedThembaR.at(tokenArray[tokenArray.length-1]);
        localStorage.setItem("myToken", newToken);
        this.setStatus('Transaction complete! New token address: '+tokenArray[tokenArray.length-1]);
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }

}

interface CompanyObj {
  name: string;
  loyalty: string;
  unit: string;
  symbol: string;
  logo: string;
}
