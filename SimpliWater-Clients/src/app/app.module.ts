import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { MeterPageComponent } from './meter-page/meter-page.component';
import { SimpliwaterService } from './simpliwater.service';
import { CalculationService } from './calculation.service';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { SentPageComponent } from './sent-page/sent-page.component';
import { MeterSimulationComponent } from './meter-simulation/meter-simulation.component';

const appRoutes: Routes = [
  { path: 'meter-simlulation/:id', component: MeterSimulationComponent },
  { path: 'meter', component: MeterPageComponent },
  { path: 'buy', component: BuyPageComponent },
  { path: 'stats/:id', component: HomePageComponent },
  {
    path: '',
    redirectTo: '/meter',
    pathMatch: 'full'
  }, { path: 'sent/:id', component: SentPageComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    MeterPageComponent,
    BuyPageComponent,
    SentPageComponent,
    MeterSimulationComponent
  ],
  providers: [SimpliwaterService, CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
