import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './index';

const notFoundRouting: Routes = [
  {
    path: '',
    // wide cart - wyłapuje wsyztsko to co nie pasuje do ścieżek powyżej,
    // dlatego zawsze umieszczamy na końcu.
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(notFoundRouting)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule {}
