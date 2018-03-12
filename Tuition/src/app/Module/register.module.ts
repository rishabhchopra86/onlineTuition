import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [Register],
  declarations: []
})
export class Register {
  _id: string;
  firstname: string;
  lastname: string;
  email:  string;
  password: string;
  country: string;
  state: string;
  city: string;
  phoneno: string;
  qualification: string;
}
