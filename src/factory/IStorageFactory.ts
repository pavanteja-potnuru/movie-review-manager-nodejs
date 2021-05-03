import { IDataStore } from "../datastore/IDataStore";
import { Movie } from "../model/Movie";
import { Review } from "../model/Review";
import { User } from "../model/User";

export interface IStorageFactory {

    getUserDS(): IDataStore<User>;

    getMovieDS() : IDataStore<Movie>;

    getReviewDS() : IDataStore<Review>;
};
