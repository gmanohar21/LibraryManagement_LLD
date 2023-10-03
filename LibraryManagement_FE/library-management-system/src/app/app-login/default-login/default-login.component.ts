import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-default-login',
  templateUrl: './default-login.component.html',
  styleUrls: ['./default-login.component.scss']
})
export class DefaultLoginComponent implements OnInit {
  error: string = '';
  loginForm: FormGroup = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl(''),
  });;
  constructor() {
    console.log('default login');
  }

  ngOnInit(): void {
    this.initailizeLoginForm();
  }
  initailizeLoginForm(){
    this.loginForm = new FormGroup({
      Email: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
    });
  }
  submit(){
    console.log(this.loginForm.value);
  }

}
