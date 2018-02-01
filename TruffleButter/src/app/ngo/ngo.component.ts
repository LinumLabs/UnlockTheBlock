import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'ngo.component.html'
})

export class NGOComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    loggedin = false;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router) {
            if (localStorage.getItem('currentUser')) {
                // logged in so return true
                this.loggedin = true;
                
            }
            else {
                this.loggedin = false;
                this.router.navigate(['/login']);
            }
         }

    ngOnInit() {
        // reset login status
    }
}
