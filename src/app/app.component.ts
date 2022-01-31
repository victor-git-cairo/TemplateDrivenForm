import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formInfo') signUpForm!: NgForm;
  answer = '';
  title = 'formApp';
  gender = "";
  secretQuestion = 'pet';
  submitted = false;

  user = {
    name: '',
    email: '',
    secretQuestion: ' ',
    answer: '',
    gender: ''
  }

  // onSubmit(form: NgForm) {
  // <form (ngSubmit)="onSubmit(formInfo)" #formInfo="ngForm">
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signUpForm);
    this.submitted = true;
    this.user.name = this.signUpForm.value.username;
    this.user.email = this.signUpForm.value.email;
    this.user.secretQuestion = this.signUpForm.value.secretQuestion;
    this.user.answer = this.signUpForm.value.secretQuestionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    console.log(this.user.name);
    console.log(this.user.email);
    console.log(this.user.secretQuestion);
    console.log(this.user.answer);
    console.log(this.user.gender);
  }

  suggestUserName() {
    const userName = "I don't know";
    this.signUpForm.form.patchValue({ username: userName }) // You can update some fields
    // this.signUpForm.form.setValue({username: userName}); // you must update all the fields  
  }

  resetForm() {
    this.signUpForm.reset();
  }
}
