import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DonationRecordService } from './donation-record.service';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { HomeComponent } from './home/home.component';
import { DonationComponent } from './donation/donation.component';
import { AddDonationComponent } from './add-donation/add-donation.component';
import { LoginInstitutionComponent } from './login-institution/login-institution.component';
import { SigninInstitutionComponent } from './signin-institution/signin-institution.component';
import { DonationListComponent } from './donation-list/donation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DonationComponent,
    AddDonationComponent,
    HomeComponent,
    LoginInstitutionComponent,
    SigninInstitutionComponent,
    DonationListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [DonationRecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
