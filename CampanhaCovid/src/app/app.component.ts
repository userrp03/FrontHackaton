import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Campanha CoviDoantion';

  constructor(private router: Router) {}  

  isLogado(): boolean {
    return localStorage.getItem('authToken') != null && localStorage.getItem('authToken') != ''
  }

  logOut() {
    localStorage.removeItem('authToken')
    this.router.navigate(['login'])
  }
}
