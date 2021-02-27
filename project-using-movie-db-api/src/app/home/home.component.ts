import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  term:string="";
  nowPlayingMovies: any[] = [];
  trendingTv: any[] = [];
  constructor(private _MoviesService: MoviesService ) {

    _MoviesService.getMovies().subscribe((data) => {

     this.nowPlayingMovies = data.results.slice(0, 10);
    });
    _MoviesService.getTrendingTv().subscribe((data) => {

      this.trendingTv = data.results.slice(0, 10);
     });

   }


  ngOnInit(): void {
  }

}
