import { Injectable } from '@angular/core';
import arrmovies from '../../sample-movies';

@Injectable()
export class MoviesService {
    movies: Array<object> = arrmovies;
    constructor() { }

    getMovies(): Array<object> {
        return this.movies;
    }
    getMovie(id): any {
        this.movies.forEach( m => {
           if (m['id'] === id) { return m; }
        });
    }
}