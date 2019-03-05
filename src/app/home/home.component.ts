import { DataBaseService, Course } from 'src/app/data-base.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  course: Course;

  constructor(private dbService: DataBaseService, private router: Router) { }
  // router umożliwia przekazywanie parametrów po jakich chcemy nawigować

  ngOnInit() {
    this.course = this.dbService.getRandomCoruse();
  }

  getCourse() {
    this.router.navigate(['/courses/', this.course.id]);
  }

}
