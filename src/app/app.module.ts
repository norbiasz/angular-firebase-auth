import { AngularFireAuthModule } from '@angular/fire/auth';

import { DataBaseService } from './data-base.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

 // Initialize Firebase
 const config = environment.config;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // AboutModule,
    // CoursesModule,
    // HomeModule,
    // NotFoundModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    SharedModule,
  ],
  providers: [DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
