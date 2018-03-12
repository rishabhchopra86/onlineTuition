import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../Shared/teacher.service";

@Component({
  selector: 'app-become-teacher',
  templateUrl: './become-teacher.component.html',
  styleUrls: ['./become-teacher.component.css']
})
export class BecomeTeacherComponent implements OnInit {

  constructor(private teacherService:TeacherService) { }

  ngOnInit() {
    this.teacherService.displayTeacher().subscribe((res)=>{
      console.log(res);
    })
  }

}
