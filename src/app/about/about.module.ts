import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent, ReactiveFormComponent, TemplateDrivenFormComponent } from './index';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AboutComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
