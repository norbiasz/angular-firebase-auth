import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent, CoursesListComponent, CourseDetailComponent } from '.';

const coursesRouting: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: '', // np: www.example.pl/courses/
        component: CoursesListComponent
      },
      {
        path: ':id', // np: www.example.pl/courses/1
        component: CourseDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(coursesRouting)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
