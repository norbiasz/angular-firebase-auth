import { Component, OnInit } from '@angular/core';
import { Course, DataBaseService } from 'src/app/data-base.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  courseOne: Course;

  constructor(private dbService: DataBaseService, private route: ActivatedRoute) { }
  // ActivatedRoute - dzięki temu obiektowi, mamy dostęp do konkretnego ID, pobiera z url

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      param.get('id'); // szukanym parametrem jest ID
      this.courseOne = this.dbService.getCourseById(param.get('id'));
    });

  }

}
