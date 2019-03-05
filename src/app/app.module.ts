import { AboutModule } from './about/about.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBaseService } from './data-base.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { InfoComponent } from './shared/info/info.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    NotFoundComponent,
    CourseDetailComponent,
    CoursesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
