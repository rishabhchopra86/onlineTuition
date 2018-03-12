import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutingModule} from './routing-module.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './DashBoard/home/home.component';
import { BecomeTeacherComponent } from './DashBoard/become-teacher/become-teacher.component';
import { AboutusComponent } from './DashBoard/aboutus/aboutus.component';
import { ContactusComponent } from './DashBoard/contactus/contactus.component';
import {LoginService} from "./Shared/login.service";
import {HttpClientModule} from "@angular/common/http";
import {TeacherService} from "./Shared/teacher.service";
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    TeacherComponent,
    StudentComponent,
    HomeComponent,
    BecomeTeacherComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [LoginService,TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
