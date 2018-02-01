import { Component, HostListener, NgZone } from '@angular/core';
import { canBeNumber } from '../util/validation';
import { SimpliwaterService } from './simpliwater.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private _ngZone: NgZone, private simpliwaterService:SimpliwaterService) {

  }

  @HostListener('window:load')
  windowLoaded() {
    this.simpliwaterService.checkAndInstantiateWeb3(window.web3, window.web3.currentProvider);
    this.onReady();
  }

  onReady = () => {
  };
  ;

}
