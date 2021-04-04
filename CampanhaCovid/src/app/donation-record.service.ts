import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {HttpHeaders, HttpClient } from "@angular/common/http";
import { Donation } from "../app/donation";

@Injectable({
  providedIn: 'root'
})

export class DonationRecordService {

  //TO DO Alterar URL
  Url="http://localhost:14026/Api/Employee/";

  constructor(private http:HttpClient) { }
   InsertDonation(donation:Donation)
   {
    // curl -X POST "https://localhost:44352/api/Doacao" -H  "accept: */*" -H  "Content-Type: application/json" -d "{\"quantidadePecas\":10,\"idDoador\":110,\"idInstituicao
      // debugger;
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.post<Donation[]>(this.Url+'/InsertDonation/', donation,httpOptions)
   }

   GetDonationRecord():Observable<Donation[]>
   {
    // curl -X GET "https://localhost:44352/api/Doacao" -H  "accept: text/plain"
      // debugger;
      return this.http.get<Donation[]>(this.Url+"/Doacao")
   }

   DeleteDonation(id:string):Observable<number>
   {
      // debugger;
      return this.http.get<number>(this.Url + '/Delete/?id='+id);
   }

   GetDonationById(id:string)
   {
      return this.http.get<Donation>(this.Url + '/GetDotantionById/?id=' + id);
   }

   UpdateDonation(donation:Donation)
   {
      // debugger;
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.post<Donation[]>(this.Url+'/UpdateDonation/', donation,httpOptions)
   }
}
