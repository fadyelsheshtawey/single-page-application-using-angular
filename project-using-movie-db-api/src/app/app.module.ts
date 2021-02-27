import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NetworksComponent } from './networks/networks.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    NetworksComponent,
    PeopleComponent,
    TvComponent,
    MoviesComponent,
    NotFoundComponent,
    MovieDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
