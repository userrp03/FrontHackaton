import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InstituicaoDTO } from '../model/instituicao-dto';
import { SignInInstituicaoDTO } from '../model/singin-instituicao-dto';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<InstituicaoDTO[]>(API + '/api/Instituicao/all')
  }

  post(instituicao: SignInInstituicaoDTO){
    return this.http.post(API + '/api/Instituicao',instituicao)
  }
}