import { DonationRecordService } from './../donation-record.service';
import { Donation } from './../donation';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.css']
})
export class AddDonationComponent implements OnInit {

  massage: string;
  dataSaved = false;
  AddDonation:FormGroup;
  DonationIdUpdate = "0";
  constructor(private router: Router,private donationService:DonationRecordService) { }

  InsertDonation(donation:Donation)
  {
    // debugger;
    if (this.DonationIdUpdate != "0") donation.Id=this.DonationIdUpdate;
      this.donationService.InsertDonation(donation).subscribe(
        ()=>
        {
          if (this.DonationIdUpdate == "0") {
            this.massage = 'Saved Successfully';

          }
          else
          {
            this.massage = 'Update Successfully';
          }
          this.dataSaved = true;
          this.router.navigate(['/Donation']);
        })
  }
  onFormSubmit() {
    const donation = this.AddDonation.value;
    this.InsertDonation(donation);
  }

  DonationEdit(id: string) {
    // debugger;
    this.donationService.GetDonationById(id).subscribe(donation => {
      this.massage = null;
      this.dataSaved = false;
      // debugger;
      this.DonationIdUpdate=id;
      this.AddDonation.controls['Quantidade'].setValue(donation.Id);
      this.AddDonation.controls['Doador'].setValue(donation.IdDoador);
      this.AddDonation.controls['Instituicao'].setValue(donation.IdInstituicao);
      this.AddDonation.controls['Status'].setValue(donation.Status);
    });
    // debugger;
  }
  clearform() {
    // debugger;
    this.AddDonation.controls['Quantidade'].setValue("");
    this.AddDonation.controls['Doador'].setValue("");
    this.AddDonation.controls['Instituicao'].setValue("");
    this.AddDonation.controls['Status'].setValue("");
  }
  ngOnInit() {
    this.AddDonation = new FormGroup({

      Quantidade: new FormControl(),
      Doador:new FormControl(),
      Instituicao:new FormControl(),
      Status:new FormControl(),

  });
  let Id = localStorage.getItem("id");
    if(Id!=null)
    {
      this.DonationEdit(Id) ;
    }}
    }

