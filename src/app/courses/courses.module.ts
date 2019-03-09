import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailComponent, CoursesListComponent, CoursesComponent } from './index';
import { SharedModule } from '../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [
    CourseDetailComponent,
    CoursesListComponent,
    CoursesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
