import { DonationRecordService } from './../donation-record.service';
import { Donation } from './../donation';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InstituicaoDTO } from '../model/instituicao-dto';
import { InstitutionService } from '../donation/institution.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.css']
})
export class AddDonationComponent implements OnInit {

  massage: string;
  dataSaved = false;
  AddDonation: FormGroup;
  DonationIdUpdate = "0";

  instituicaoList: InstituicaoDTO[]
  statusOptions: string[] = ['Posso Entregar na Instituição', 'Preciso que coletem em minha casa']
  constructor(
    private router: Router,
    private donationService: DonationRecordService,
    private institutionService: InstitutionService) { }

  InsertDonation(donation: Donation) {
    // debugger;
    if (this.DonationIdUpdate != "0") donation.Id = this.DonationIdUpdate;
    this.donationService.InsertDonation(donation).subscribe(
      () => {
        if (this.DonationIdUpdate == "0") {
          this.massage = 'Saved Successfully';

        }
        else {
          this.massage = 'Update Successfully';
        }
        this.dataSaved = true;
        this.router.navigate(['/Donation']);
      })
  }
  onFormSubmit() {
    const donation = this.AddDonation.value;
    donation.Status = donation.Status === 'Preciso que coletem em minha casa' ? true: false
    this.InsertDonation(donation);
  }

  clearform() {
    // debugger;
    this.AddDonation.controls['Quantidade'].setValue("");
    this.AddDonation.controls['NomeDoador'].setValue("");
    this.AddDonation.controls['EmailDoador'].setValue("");
    this.AddDonation.controls['Instituicao'].setValue("");
    this.AddDonation.controls['Status'].setValue("");
  }
  ngOnInit() {
    this.AddDonation = new FormGroup({

      Quantidade: new FormControl(),
      NomeDoador: new FormControl(),
      EmailDoador: new FormControl(),
      Instituicao: new FormControl(),
      Status: new FormControl(),


    });
    
    this.institutionService.getAll().subscribe(res => this.instituicaoList = res)
  }
}

