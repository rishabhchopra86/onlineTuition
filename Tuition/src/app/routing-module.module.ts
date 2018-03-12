import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
import {AboutusComponent} from "./DashBoard/aboutus/aboutus.component";
import {ContactusComponent} from "./DashBoard/contactus/contactus.component";
import {HomeComponent} from "./DashBoard/home/home.component";
const routes : Routes =[
  {path:'register' ,component: RegistrationComponent},
  {path:'login' ,component: LoginComponent},
  {path:'student' ,component:StudentComponent },
  {path:'teacher' ,component:TeacherComponent },
  {path:'about', component:AboutusComponent},
  {path:'contact',component:ContactusComponent},
  {path:'home',component:HomeComponent},
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
