import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  role:String;
  constructor() {
    this.role='student';
  }

}
