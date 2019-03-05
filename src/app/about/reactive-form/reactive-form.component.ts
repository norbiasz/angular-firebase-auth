import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  contactForm: FormGroup;
  courses = ['Angular', 'JavaFx', 'Java8', 'OrmLite'];
  message = new ReactiveMessage();
  constructor() { }

  ngOnInit() {

    this.contactForm = new FormGroup({
      topic: new FormControl('Test', Validators.required),
      message: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      name: new FormControl(null,  Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      course: new FormControl(this.courses[0]),
      bot: new FormControl(null,  Validators.required),
      questions: new FormArray([new FormControl(null), new FormControl(null)], this.validQuestions)
      // dodanie custom valid na pola w tablicy
    });

    // zaawansowana kontrola danych nad formularzem, każda zmiana wywołuje akcje
    this.contactForm.get('topic').valueChanges.subscribe( value => {
      console.log(value);
    });
    this.contactForm.get('email').statusChanges.subscribe( value => {
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.contactForm);
    this.message.topic = this.contactForm.get('topic').value; // inny posób pobrania danych
    this.message.message = this.contactForm.value.message;
    this.message.name = this.contactForm.value.name;
    this.message.email = this.contactForm.value.email;
    this.message.course = this.contactForm.value.course;
    this.message.bot = this.contactForm.value.bot;
    console.log(this.message);
    this.reset();
  }

  // dodanie kolejnych pól w formularzu - loop
  addQuestion() {
    const arrQuest = <FormArray>this.contactForm.get('questions');
    arrQuest.push(new FormControl(null));
  }

  // dadajemy własną walidację na pole questions
  validQuestions(control: AbstractControl): ValidationErrors {
    const arr = <[string]>control.value;
    if (arr.includes('dupa')) {
      // jesli wykryje powyższy wyraz zostanie on validowany
      return {'dostepDoKursu': true };
    }
  }

  // wyczyszecznie pół w formularzu
  reset() {
    this.contactForm.reset({
      course: this.courses[3]
    });
  }
}

class ReactiveMessage {
  constructor(
    public topic?: string,
    public message?: string,
    public name?: string,
    public email?: string,
    public course: string = 'Angular',
    public bot?: boolean
  ) {}
}

