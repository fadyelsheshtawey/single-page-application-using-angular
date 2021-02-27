import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
   
  movieId:any;
  movieData:any;
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService    ) { 
    this.movieId=_ActivatedRoute.snapshot.params.id;
    this._MoviesService.getMovieDetails(this.movieId).subscribe((data)=>{
      this.movieData = data
    })
  }

  imgPath:any = "https://image.tmdb.org/t/p/w500"
  
  ngOnInit(): void {
  }

}
