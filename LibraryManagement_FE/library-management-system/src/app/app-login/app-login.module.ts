import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoginRoutingModule } from './app-login-routing.module';
import { DefaultLoginComponent } from './default-login/default-login.component';


@NgModule({
  declarations: [
    DefaultLoginComponent
  ],
  imports: [
    CommonModule,
    AppLoginRoutingModule
  ]
})
export class AppLoginModule { }
