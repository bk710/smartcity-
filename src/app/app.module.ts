import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// import{ MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { WeatherComponent } from './weather/weather.component';
import { MoviesComponent } from './movies/movies.component';
import { NewsComponent } from './news/news.component';
import { JokesComponent } from './jokes/jokes.component';
import { RegPageComponent } from './reg-page/reg-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    WeatherComponent,
    MoviesComponent,
    NewsComponent,
    JokesComponent,
    RegPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
