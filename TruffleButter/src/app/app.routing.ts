import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { BankComponent } from './bank/bank.component';
import { NGOComponent } from './ngo/ngo.component';
import { GDOComponent } from './gdo/gdo.component';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
    { path: 'bank', component: BankComponent, canActivate: [AuthGuard] },
    { path: 'ngo', component: NGOComponent, canActivate: [AuthGuard] },
    { path: 'gdo', component: GDOComponent, canActivate: [AuthGuard] },
    { path: 'beneficiary', component: BeneficiaryComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);