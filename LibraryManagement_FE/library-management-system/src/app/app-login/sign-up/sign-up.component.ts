import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    Phone: new FormControl(''),
    Password: new FormControl(''),
    ConfirmPassword: new FormControl(''),
  });;
  constructor() { }

  ngOnInit(): void {
  }
  signUp(){
  }
  initailizeSignupForm(){
    this.signupForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
      ConfirmPassword: new FormControl('', [Validators.required])
    });
  }
}
