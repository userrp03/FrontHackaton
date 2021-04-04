import { AddDonationComponent } from './add-donation/add-donation.component';
import { DonationComponent } from './donation/donation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"donation", component: DonationComponent},
  {path:"adddonation", component: AddDonationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
