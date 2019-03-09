import { AngularFireAuthModule } from '@angular/fire/auth';

import { DataBaseService } from './data-base.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire';


 // Initialize Firebase
 const config = {
  apiKey: 'AIzaSyDqR-T5X9bo-5tbE1giL3YomVy0DDDEcxA',
  authDomain: 'ng-todo-87956.firebaseapp.com',
  databaseURL: 'https://ng-todo-87956.firebaseio.com',
  projectId: 'ng-todo-87956',
  storageBucket: 'ng-todo-87956.appspot.com',
  messagingSenderId: '962084963902'
};

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
