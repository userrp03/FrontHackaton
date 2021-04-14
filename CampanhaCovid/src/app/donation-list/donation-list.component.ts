import { Component, OnInit } from '@angular/core';
import { DonationService } from '../add-donation/donation.service';
import { Donation } from '../donation';
import { InstitutionService } from '../donation/institution.service';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {

  displayedColumns: string[] = ['Código da doação', 'Nome do doador', 'Email do doador', 'Quantidade de peças', 'Necessitam de coleta ?'];
  dataSource: Donation[]

  institutionId: string

  constructor(
    private institutionService: InstitutionService,
    private donationService: DonationService) { 
    this.institutionId = localStorage.getItem('authToken')
  }

  ngOnInit(): void {
   this.donationService.getDonationByInstitution(this.institutionId).subscribe(res => { this.dataSource = res})
  }
}