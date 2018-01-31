import { IssuerComponent } from './issuer/issuer.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaterCompanyComponent } from './water-company/water-company.component';

const routes: Routes = [
  {
    path: '',
    component: ConsumerComponent,
    pathMatch: 'full'
  },
  {
    path: 'issuer',
    component: IssuerComponent,
    pathMatch: 'full'
  },
  {
    path: 'water-company',
    component: WaterCompanyComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
