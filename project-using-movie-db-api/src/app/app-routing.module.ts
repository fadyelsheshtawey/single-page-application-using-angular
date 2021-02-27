import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworksComponent } from './networks/networks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [

  { path: '', redirectTo: 'Register', pathMatch: 'full' },

  { path: 'Home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'Noxe', redirectTo: 'Home', canActivate:[AuthGuard]},
  { path: 'About', component: AboutComponent, canActivate:[AuthGuard]},

  { path: 'Home/movieDetails/:id', component:MovieDetailsComponent , canActivate:[AuthGuard]},
  { path: 'Movies', component: MoviesComponent,canActivate:[AuthGuard] },
  { path: 'Tv', component: TvComponent, canActivate:[AuthGuard] },
  { path: 'People', component: PeopleComponent, canActivate:[AuthGuard] },
  { path: 'Networks', component: NetworksComponent, canActivate:[AuthGuard] },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
