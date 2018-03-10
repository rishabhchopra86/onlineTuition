import { Component, OnInit } from '@angular/core';
import {Login} from '../Module/login.module';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login;
  constructor(private router:Router) {
    this.login = new Login();
  }

  ngOnInit() {
  }
  onLogin(login){
    console.log(login);
   this.router.navigate(['register']);
  }
}
