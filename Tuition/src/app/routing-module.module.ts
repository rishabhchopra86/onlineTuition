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
import {BecomeTeacherComponent} from "./DashBoard/become-teacher/become-teacher.component";
const routes : Routes =[
  {path:'register' ,component: RegistrationComponent},
  {path:'login' ,component: LoginComponent},
  {path:'student' ,component:StudentComponent},
  {path:'teacher' ,component:TeacherComponent},
  {path:'teacherslist' ,component:BecomeTeacherComponent},
  {path:'about', component:AboutusComponent},
  {path:'contact',component:ContactusComponent},
  {path:'',component:HomeComponent},
  {path:'teacherdb',component:HomeComponent},
  {path:'studentdb',component:HomeComponent},
  {path:'admindb',component:HomeComponent},
  {path:'admin-subjects',component:HomeComponent},
  {path:'admin-classes',component:HomeComponent},
  {path:'admin-students',component:HomeComponent},
  {path:'admin-teachers',component:HomeComponent},
  {path:'student-subjects',component:HomeComponent},
  {path:'teacher-classes',component:HomeComponent},
  {path:'teacher-students',component:HomeComponent},
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
