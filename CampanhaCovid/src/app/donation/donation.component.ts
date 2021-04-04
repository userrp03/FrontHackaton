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

  // Apagar
  // donation: Observable<Donation[]>;
  // filter= "";
  // p="";
  // Apagar /
  constructor(
                private router: Router,
                private donationRecordService:DonationRecordService
              ) { }

  LoadDonation(){
      // debugger;
      this.donation = this.donationRecordService.GetDonationRecord();
      console.log(this.donation);

      // debugger;
   }

   DonationEdit(id: string) {
    // debugger;
   localStorage.removeItem("id");
   localStorage.setItem("id",id.toString());
    this.router.navigate(['/adddonation'], { queryParams: { Id: id } });
    // debugger;
  }

   DeleteDonation(id: string) {
    if (confirm("Tem certeza que deseja deletar a doação?")) {

      this.donationRecordService.DeleteDonation(id).subscribe(
        () => {
          this.dataSaved = true;
          this.massage = "Deletado com sucesso";
        }
      );
    }
  }

  ngOnInit() {
    localStorage.clear();
    this.LoadDonation();

  }
}
