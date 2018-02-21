import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css'],
  providers: [MoviesService]
})
export class MyhomeComponent implements OnInit {
  movies: Array<object>;

  constructor(private theMovies: MoviesService) { }

  ngOnInit() {
    this.movies = this.theMovies.getMovies();
  }
}
