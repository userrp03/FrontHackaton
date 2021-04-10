import { AddDonationComponent } from './add-donation/add-donation.component';
import { DonationComponent } from './donation/donation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginInstitutionComponent } from './login-institution/login-institution.component';
import { AuthGuard } from './login-institution/auth-guard';
import { SigninInstitutionComponent } from './signin-institution/signin-institution.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent
  },
  {
    path: "login", 
    component: LoginInstitutionComponent
  },
  {
    path: "signin",
    component: SigninInstitutionComponent
  },
  {
    path:"donation", 
    component: DonationComponent,
    canActivate: [AuthGuard],
  },
  {
    path:"adddonation", 
    component: AddDonationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
