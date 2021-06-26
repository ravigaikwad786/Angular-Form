
import { RouterModule ,Routes } from '@angular/router';
import { NgModule ,Component} from '@angular/core';


import { HomeComponent } from './../../components/home/home.component';
import { NewUserComponent } from './../../components/new-user/new-user.component';

const appRoutes: Routes=[
  { path : 'new-user' , component : NewUserComponent},
  { path : 'home' , component : HomeComponent },

];

@NgModule({
  
  imports: [ RouterModule.forChild(appRoutes) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
