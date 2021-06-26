

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { NewUserComponent } from './components/new-user/new-user.component';
import { HeaderComponent } from './components/header/header.component';

import { AppRoutingModule } from './app-routing/app-routing/app-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    
    NewUserComponent,
    
    HeaderComponent,
    
    HomeComponent,
   
  ],
  imports: [
    BrowserModule ,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
