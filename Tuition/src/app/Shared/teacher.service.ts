import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import "rxjs/Rx"

@Injectable()
export class TeacherService {

  constructor(private httpClient:HttpClient) { }

  displayTeacher(){
    return this.httpClient.get('http://localhost:3000/api/user/role/2').map((res)=>{
      return res;
    });
  }

}
