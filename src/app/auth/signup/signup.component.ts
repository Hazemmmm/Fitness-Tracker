import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.email, Validators.required],
      }),
      password: new FormControl('', {
        validators: [Validators.minLength(6), Validators.required],
      }),
      datePicker: new FormControl('', {
        validators: [Validators.required],
      }),
      agreement: new FormControl(false, {
        validators: [Validators.required],
      }),
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
