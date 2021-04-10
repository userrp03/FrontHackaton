import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-institution',
  templateUrl: './login-institution.component.html',
  styleUrls: ['./login-institution.component.css']
})
export class LoginInstitutionComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.maxLength(25)]
    })
  }

  onSubmit(): void {
    var userName: String = this.loginForm.get('email').value
    var password: String = this.loginForm.get('password').value

    this.loginService.postLogIn(userName, password).subscribe(res => {
      this.router.navigate(['donate'])
    })
  }
}
