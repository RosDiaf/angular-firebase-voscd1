import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AlertComponent } from './Alert/alert.component';
import { BackgroundComponent } from './Background/background.component';
import { PlayerContainer } from './PlayerContainer/player-container.component';
import { PlayerFormComponent } from './PlayerForm/player-form.component';
import { LogoComponent } from './Logo/logo.component';
import { NavBar } from './NavBar/navbar.component';
import { PostComponent } from './Post/post.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [
    AppComponent,
    AlertComponent,
    BackgroundComponent,
    LogoComponent,
    NavBar,
    PostComponent,
    PlayerContainer,
    PlayerFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
