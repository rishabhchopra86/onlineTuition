import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Register} from '../Module/register.module';
import {RegisterService} from '../Shared/register.service';
import {register} from "ts-node";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
flag : any = 'S';
  defaultImage: String = 'https://katiewagnersocialmedia.com//wp-content/uploads/2012/08/Facebook-Blank-Photo.jpg';
  url: any;
  register:Register;
  States1: any = {
    Gujarat: ['Navsari', 'Surat', 'Ahemdavad',],
    Goa: ['panji', 'Donapola','Colva'],
    Maharastra: ['Mumbai', 'Pune']
  };

  states: any = Object.keys(this.States1);
  constructor(private router: Router,private registerservice: RegisterService) { }

  ngOnInit() {
 this.register = new Register();
  }
  toggleButton(e){
    this.flag = e;
  }
  onRegister(flag){
    if(this.flag=='S'){
      this.registerservice.insertData(this.register).subscribe(res => {
         console.log(res);
      })
      this.router.navigate(['student']);
    }else{

      this.router.navigate(['teacher']);
    }
  }
  onImageError(event){
    console.debug(event);
    event.target.src = this.defaultImage;
  }
  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event1: any) => {
        this.url = event1.target.result;
        // this.user.proPic = event1.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  readFile(file, reader, callback) {
    reader.onload = () => {
      callback(reader.result);
      // this.user.proPic = reader.result;
      console.log(reader.result);
    }
    reader.readAsDataURL(file);
  }

}
