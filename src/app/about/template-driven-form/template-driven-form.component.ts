import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('contactForm')
  contactForm: NgForm;

  message = new TemplateMessage();
  courses = ['Angular', 'JavaFx', 'Java8', 'OrmLite'];

  constructor() { }

  ngOnInit() {

  }

  // onSubmit(contactForm) {
  //   console.log(this.message);
  //   console.log(contactForm);
  // }

  onSubmit() { // gdy mamy @ViewChild
    console.log(this.message);
    this.reset();
  }

  reset() {
    // this.contactForm.reset(); // resetuje całkowicie nawet select
    this.message = new TemplateMessage();
    this.contactForm.resetForm(this.message);
  }

}
class TemplateMessage {
  constructor(
    public topic?: string,
    public message?: string,
    public name?: string,
    public email?: string,
    public course: string = 'Angular',
    public bot?: boolean
  ) {}
}
