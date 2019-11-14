import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BackgroundComponent } from './Background/background.component';
import { LogoComponent } from './Logo/logo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, BackgroundComponent, LogoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
