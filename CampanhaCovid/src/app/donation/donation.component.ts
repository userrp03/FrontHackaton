import { Observable } from 'rxjs';
import { Donation } from './../donation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationRecordService } from '../donation-record.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  donation: Observable<Donation[]>;
  massage:String;
  dataSaved=false;

  constructor(
    private router: Router,
    private donationRecordService:DonationRecordService
  ) { } 

  ngOnInit() {
  }
}
