import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-default-login',
  templateUrl: './default-login.component.html',
  styleUrls: ['./default-login.component.scss']
})
export class DefaultLoginComponent implements OnInit {
  loginForm: FormGroup;
  successMessage = '';
  isFormInitialized = false;
  constructor() {
    console.log('Default Login Component');
   }

  ngOnInit() {
    this.intializeLoginForm();
  }

  intializeLoginForm() {
    this.loginForm = new FormGroup({
      Email: new FormControl(null, Validators.email),
      Password: new FormControl(null, Validators.required),
    });
    this.isFormInitialized = true;
  }
  isValid(controlName: any) {
    return (
      this.loginForm.controls[controlName].invalid &&
      this.loginForm.controls[controlName].touched
    );
  }
  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      /*this.myservice.login(this.loginForm.value).subscribe({
        next: (data) => {
          console.log(data);
          localStorage.setItem('token', JSON.stringify(data));
          this.successMessage = 'Login Success';
          this.router.navigate(['/dashboard']);
        },
        error: (error) => (this.successMessage = 'Some error'),
      });*/
    }
  }
}
