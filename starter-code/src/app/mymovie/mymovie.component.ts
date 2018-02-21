import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-mymovie',
  templateUrl: './mymovie.component.html',
  styleUrls: ['./mymovie.component.css'],
  providers: [MoviesService]
})
export class MymovieComponent implements OnInit {
  movieId: Number;
  myMovie: Object;
  constructor(private route: ActivatedRoute, private theMovies: MoviesService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']));
      console.log(this.movieId);
      this.myMovie = this.theMovies.getMovie(this.movieId);
  }
}
