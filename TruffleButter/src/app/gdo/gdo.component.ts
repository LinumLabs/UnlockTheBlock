import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    moduleId: module.id.toString(),
    templateUrl: 'gdo.component.html'
})

export class GDOComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    loggedin = false;
    type: any;
    data: any;
    options: any;


    public doughnutChartLabels: string[] = ['Tokens Burned', 'Tokens Minted'];
    public doughnutChartData: number[] = [450, 550];
    public doughnutChartType: string = 'doughnut';

    public barChartLabels: string[] = ['Merchant1', 'Merchant2', 'Merchant3'];
    public barChartData: any[] = [350, 750, 400];
    public barChartType: string = 'bar';

    public radarChartLabels: string[] = ['Grains', 'Vegetables', 'Oils', 'Meat', 'Water'];
    public radarChartData: any[] = [850, 450, 200, 1000, 500];
    public radarChartType: string = 'radar';

    public scatterChartLabels: string[] = ['BEN'];
    
    public scatterChartData: any[] = [[{
        x: -10,
        y: 0
    }, {
        x: 0,
        y: 10
    }, {
        x: 10,
        y: 5
    }]];
    public scatterChartType: string = 'scatter';

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
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
