import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Level2Component, Level1Component, SecretComponent } from './index';
import { SecretRoutingModule } from './secret.routing.module';

@NgModule({
  declarations: [
    SecretComponent,
    Level1Component,
    Level2Component
  ],
  imports: [
    CommonModule,
    SecretRoutingModule
  ]
})
export class SecretModule {}
