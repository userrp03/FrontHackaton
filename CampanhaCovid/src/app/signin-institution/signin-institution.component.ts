import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InstitutionService } from '../donation/institution.service';
import { SignInInstituicaoDTO } from '../model/singin-instituicao-dto';

@Component({
  selector: 'app-signin-institution',
  templateUrl: './signin-institution.component.html',
  styleUrls: ['./signin-institution.component.css']
})
export class SigninInstitutionComponent implements OnInit {

  options: string[] = ['Sim','Não']
  instituicaoSignInForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private institutionService: InstitutionService
    ) { }

  ngOnInit(): void {
    this.instituicaoSignInForm = this.formBuilder.group({
      nome: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      telefone: ['',[Validators.required]],
      cnpj: ['',[Validators.required]],
      descricao: ['',[Validators.required]],
      transporte: ['',[Validators.required]],
      usuarioSenha: ['',[Validators.required]],
      enderecoLogradouro: ['',[Validators.required]],
      enderecoCep: ['',[Validators.required]],
      enderecoBairro: ['',[Validators.required]],
      enderecoCidade: ['',[Validators.required]],
      enderecoUf: ['',[Validators.required]],
      enderecoNumero: ['',[Validators.required]],
      enderecoComplemento: ['',[]]
    })
  }

  onFormSubmit(): void {
    var dados: SignInInstituicaoDTO = {
      nome: this.instituicaoSignInForm.get('nome').value,
      email: this.instituicaoSignInForm.get('email').value,
      telefone: this.instituicaoSignInForm.get('telefone').value,
      cnpj: this.instituicaoSignInForm.get('cnpj').value,
      descricao: this.instituicaoSignInForm.get('descricao').value,
      transporte: this.instituicaoSignInForm.get('transporte').value === 'Sim' ? true : false,
      usuarioLogin: this.instituicaoSignInForm.get('email').value,
      usuarioSenha: this.instituicaoSignInForm.get('usuarioSenha').value,
      enderecoLogradouro: this.instituicaoSignInForm.get('enderecoLogradouro').value,
      enderecoCep: this.instituicaoSignInForm.get('enderecoCep').value,
      enderecoBairro: this.instituicaoSignInForm.get('enderecoBairro').value,
      enderecoCidade: this.instituicaoSignInForm.get('enderecoCidade').value,
      enderecoUf: this.instituicaoSignInForm.get('enderecoUf').value,
      enderecoNumero: this.instituicaoSignInForm.get('enderecoNumero').value,
      enderecoComplemento: this.instituicaoSignInForm.get('enderecoComplemento').value
    }

    this.institutionService.post(dados).subscribe(res => {})
  }

}
