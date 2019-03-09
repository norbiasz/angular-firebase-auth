import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '.';

const aboutRouting: Routes = [
  {
    path: '',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(aboutRouting)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
