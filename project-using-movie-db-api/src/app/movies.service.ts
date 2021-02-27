import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }


  getMovies(): Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=17908083df1d002ee11ef950ddfa7f7b&language=en-US&page=1`);
  }
  getTrendingTv(): Observable<any>
{
  return this._HttpClient.get(`https://api.themoviedb.org/3/trending/all/day?api_key=17908083df1d002ee11ef950ddfa7f7b`);

}

getMovieDetails(id:any):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=17908083df1d002ee11ef950ddfa7f7b&language=en-US`);

}
}
