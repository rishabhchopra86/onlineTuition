import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
flag : any = 'S';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  toggleButton(e){
    this.flag = e;
  }
  getStarted(flag){
    if(this.flag=='S'){
      this.router.navigate(['student']);
    }else{
      this.router.navigate(['teacher']);
    }
  }
}
