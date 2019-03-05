import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
// dodatkowe metody dla observable które trzeba zaimportować ręcznie

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  COURSES = [
    new Course('1', 'Kurs JavaFX', 'Wszystko co musisz wiedzieć o budowaniu aplikacji desktopowych...'),
    new Course('2', 'Kurs OrmLite', 'Obsługa baz danych z OrmLite jeszcze nigdy nie była tak prosta...'),
    new Course('3', 'Kurs Java 8', 'Od teraz Java 8 nie będzie stanowić dla Ciebie problemu.....'),
    new Course('4', 'Kurs Angular', 'Twórz niesamowite aplikacje webowe. Poznaj możliwoci nowej wersji Angulara....')
  ];

  constructor() { }

  getCourses(): Observable<Array<Course>> {
    return of(this.COURSES);
    // of - zwaracamy tablicę jako Observable
  }

  getCourseById(id: string): Course {
    return this.COURSES.find(e => e.id === id);
  }

  getRandomCoruse() {
    const n = Math.floor(Math.random() * 3);
    return this.COURSES[n];
  }
}

export class Course {
  constructor(public id: string, public title: string, public content: string){}
}
