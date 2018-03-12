import {Component, OnInit} from '@angular/core';
import {LoginService} from "./Shared/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Online Tution Class';
  constructor(private login:LoginService){
  }
  ngOnInit(){

  }
}
