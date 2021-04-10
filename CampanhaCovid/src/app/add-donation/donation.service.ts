import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DonationDTO } from './donation-dto';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  postDonation(donationDTO: DonationDTO): Observable<DonationDTO> {
    return this.http.post<DonationDTO>(API + '/', donationDTO)
  }
}
