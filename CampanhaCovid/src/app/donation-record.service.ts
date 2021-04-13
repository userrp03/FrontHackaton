import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {HttpHeaders, HttpClient } from "@angular/common/http";
import { Donation } from "../app/donation";
import { environment } from 'src/environments/environment';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class DonationRecordService {

  constructor(private http:HttpClient) { }

   InsertDonation(donation: Donation)
   {
      return this.http.post<Donation[]>(API +'/api/Doacao/', donation)
   }   
}
