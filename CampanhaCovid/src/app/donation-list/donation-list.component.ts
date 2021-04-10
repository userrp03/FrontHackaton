import { Component, OnInit } from '@angular/core';
import { InstitutionService } from '../donation/institution.service';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {

  constructor(private institutionService: InstitutionService) { }

  ngOnInit(): void {
  }

}
