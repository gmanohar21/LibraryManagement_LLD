import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginModule } from './app-login/app-login.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./app-login/app-login.module').then(m => m.AppLoginModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AppLoginModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
