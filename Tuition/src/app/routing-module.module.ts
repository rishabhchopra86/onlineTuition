import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
const routes : Routes =[
  {path:'register' ,component: RegistrationComponent},
  {path:'login' ,component: LoginComponent},
  {path:'student' ,component:StudentComponent },
  {path:'teacher' ,component:TeacherComponent },
  {path: '**', redirectTo: 'login'},
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
