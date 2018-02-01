import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    loggedin = false;

    constructor(private userService: UserService, private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this.loggedin = true;

        }
        else {
            this.loggedin = false;
        }
    }

    ngOnInit() {
         
    }

}