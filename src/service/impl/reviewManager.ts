import { IDataStore } from "../../datastore/IDataStore";
import { IStorageFactory } from "../../factory/IStorageFactory";
import { Movie } from "../../model/Movie";
import { Review, ReviewInput } from "../../model/Review";
import { User } from "../../model/User";
import { IReviewManager } from "../IReviewManager";
import { isNil } from 'lodash';
import { generateReviewId } from "../../utils/serviceUtils";

export class ReviewManager implements IReviewManager{
    private userDS: IDataStore<User>;
    private movieDS: IDataStore<Movie>;
    private reviewDS: IDataStore<Review>;
    constructor(storageFactory: IStorageFactory) {
        this.userDS = storageFactory.getUserDS();
        this.movieDS = storageFactory.getMovieDS();
        this.reviewDS = storageFactory.getReviewDS();
    }
    add(input: ReviewInput) {
        const movie = this.movieDS.get(input.movieName);
        if(isNil(movie)) throw new Error('Invalid movie name');
        const user = this.userDS.get(input.userName);
        if(isNil(user)) throw new Error('Invalid user name');
        const existingReview = this.reviewDS.get(generateReviewId(input.userName, input.movieName));
        if(!isNil(existingReview)) {
            this.remove(input.userName, input.movieName);
        }
        let review =  new Review(input.userName, input.movieName, input.rating, user.role);
        this.reviewDS.add(review.id, review);
    }

    remove(userName: string, movieName: string) {
        this.reviewDS.remove(generateReviewId(userName, movieName));
    }

    printAllReviews(): void {
        this.reviewDS.getAll().on('data', (data: Review) => {
            console.log(`${data.movieName} ${data.userName} ${data.rating}`);
        });
    }
};
