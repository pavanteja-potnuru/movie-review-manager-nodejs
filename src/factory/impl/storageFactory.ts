import { IDataStore } from "../../datastore/IDataStore";
import { DataStore } from "../../datastore/impl/DataStore";
import { Movie } from "../../model/Movie";
import { Review } from "../../model/Review";
import { User } from "../../model/User";
import { IStorageFactory } from "../IStorageFactory";

export class StorageFactory implements IStorageFactory {
    private userDS: IDataStore<User>;
    private movieDS: IDataStore<Movie>;
    private reviewDS: IDataStore<Review>;
    constructor() {
        this.userDS = new DataStore<User>();
        this.movieDS = new DataStore<Movie>();
        this.reviewDS = new DataStore<Review>();
    }

    getUserDS(): IDataStore<User> {
        return this.userDS;
    }

    getMovieDS() : IDataStore<Movie> {
        return this.movieDS;
    }

    getReviewDS() : IDataStore<Review> {
        return this.reviewDS;
    }
}