import { DataBaseService, Course } from './../data-base.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  // courses: Array<Course>;

  // constructor(private dbService: DataBaseService) { }

  // ngOnInit() {
  //   this.dbService.getCourses().subscribe(listCourses => {
  //     this.courses = listCourses;
  //   });
  // }


}
