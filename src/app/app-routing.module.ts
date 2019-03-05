import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { AboutModule } from './about/about.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
    // dokładne dopasowanie pustej ściezki do redirectTo
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'courses',
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
  // {
  //   path: 'courses/:id',
  //   component: CourseDetailComponent
  // },
  {
    path: '**',
    // wide cart - wyłapuje wsyztsko to co nie pasuje do ścieżek powyżej,
    // dlatego zawsze umieszczamy na końcu.
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [AboutModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
