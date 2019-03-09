
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { AboutModule } from './about/about.module';
import { CoursesModule } from './courses/courses.module';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AuthGuardsService } from './auth';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  //   // dokładne dopasowanie pustej ściezki do redirectTo
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'courses',
  //   component: CoursesComponent,
  //   children: [
  //     {
  //       path: '', // np: www.example.pl/courses/
  //       component: CoursesListComponent
  //     },
  //     {
  //       path: ':id', // np: www.example.pl/courses/1
  //       component: CourseDetailComponent
  //     }
  //   ]
  // },
  // {
  //   path: 'courses/:id',
  //   component: CourseDetailComponent
  // },
  // {
  //   path: '**',
  //   // wide cart - wyłapuje wsyztsko to co nie pasuje do ścieżek powyżej,
  //   // dlatego zawsze umieszczamy na końcu.
  //   component: NotFoundComponent
  // },

  // LAZY LOADING

  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule', canLoad: [AuthGuardsService] },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'secret', loadChildren: './secret/secret.module#SecretModule'},
  { path: 'courses', loadChildren: './courses/courses.module#CoursesModule' },
  { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    // AboutModule,
    // CoursesModule,
    // HomeModule,
    // NotFoundModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
