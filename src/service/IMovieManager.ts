import { MovieInput } from "../model/Movie";

export interface IMovieManager {

    add(input: MovieInput): void;

    remove(name: string): void;

    printAllMovies(): void;
};
