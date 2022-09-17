import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './jokes/jokes.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { MoviesComponent } from './movies/movies.component';
import { NewsComponent } from './news/news.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:'' , component:MainComponent},
  {path:'loginPage' , component:LoginPageComponent},
  {path:'registerF' , component:RegPageComponent},
  {path:'weatherPage' , component:WeatherComponent},
  {path:'moviesPage' , component:MoviesComponent },
  {path:'newsPage' , component:NewsComponent },
  {path:'jokesPage' , component:JokesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
