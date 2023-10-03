import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLoginComponent } from './default-login/default-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';


const routes: Routes = [
  {
    path: '',
    component: DefaultLoginComponent,
    data: {
      title: 'Login Page',
    },
  },
];

@NgModule({
  declarations: [DefaultLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  exports: [DefaultLoginComponent],
  providers: []
})
export class AppLoginModule { }
