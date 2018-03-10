import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[Login],
  declarations: []
})
export class Login {
  email: string;
  password: string;
}
