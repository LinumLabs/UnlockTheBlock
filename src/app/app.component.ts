import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';
import { UrlSegment, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'app works!';
  public sizer = "";
  public urlstring = "";
  public urlsplit;
  private urlsplitcount = 0;

  constructor(private router: Router , private  activatedRoute : ActivatedRoute) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }

   this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         // trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
         // if you need to scroll back to top, here is the right place
         window.scrollTo(0, 0);
         this.urlstring = window.location.href.toString();
         this.urlsplit = this.urlstring.split("/");
         this.urlsplitcount = this.urlsplit.length;
         if ((this.urlsplitcount > 4) ||  (this.urlsplit[this.urlsplitcount - 1]) != "")
           this.sizer = "small";
         else this.sizer = "large";
      }
    });
  }
  
  ngOnInit () {

  }
  
}
