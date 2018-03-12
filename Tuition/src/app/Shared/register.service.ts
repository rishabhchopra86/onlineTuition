import { Injectable } from '@angular/core';
import {Register} from '../Module/register.module';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import  {Observable} from 'rxjs/Observable';
@Injectable()
export class RegisterService {
register:Register;
  constructor(private http: HttpClient) {

  }
insertData(register){
    return this.http.post('',register);
}
}
