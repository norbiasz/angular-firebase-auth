import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecretComponent, Level1Component, Level2Component } from './index';
import { AuthGuardsService } from '../auth/index';

const secretRouting: Routes = [
  {
    path: '',
    component: SecretComponent,
    // nacałą kartę ale nie działa LeazyLoading
    // canActivate: [AuthGuardsService],
    canActivateChild: [AuthGuardsService],
    children: [
      {
        path: 'level1',
        component: Level1Component
      },
      {
        path: 'level2',
        component: Level2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(secretRouting)],
  exports: [RouterModule]
})
export class SecretRoutingModule {}
