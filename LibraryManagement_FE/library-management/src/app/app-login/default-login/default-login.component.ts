import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-default-login',
  templateUrl: './default-login.component.html',
  styleUrls: ['./default-login.component.scss']
})
export class DefaultLoginComponent implements OnInit {
  loginForm: UntypedFormGroup;
  successMessage = '';
  isFormInitialized = false;
  constructor() {
    console.log('Default Login Component');
   }

  ngOnInit() {
    this.intializeLoginForm();
  }

  intializeLoginForm() {
    this.loginForm = new UntypedFormGroup({
      Email: new UntypedFormControl(null, Validators.email),
      Password: new UntypedFormControl(null, Validators.required),
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
