import { IDataStore } from "../../datastore/IDataStore";
import { Movie, MovieInput } from "../../model/Movie";
import { IMovieManager } from "../IMovieManager";
import { isNil } from 'lodash';
import { Genre } from '../../model/Genre';

export class MovieManager implements IMovieManager {
    private movieDS: IDataStore<Movie>;
    constructor(movieDataStore: IDataStore<Movie>) {
        this.movieDS = movieDataStore;
    }
    add(input: MovieInput) {
        let genres: Array<Genre>;
        if(!isNil(input.genres)) {
            genres = input.genres.map((genre) => {
                return Genre[genre];
            });
        }

        this.movieDS.add(input.name, new Movie(input.name, input.year, genres));
    }

    remove(name: string) {
        this.movieDS.remove(name);
    }

    printAllMovies(): void {
        this.movieDS.getAll().on('data', (data: Movie) => {
            console.log('Movie: ', data.name);
        })
    }
};
