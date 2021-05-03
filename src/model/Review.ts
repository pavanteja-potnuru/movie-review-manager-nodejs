import { generateReviewId } from "../utils/serviceUtils";
import Role from "./Role";

export class Review {
    id: string;
    userName: string;
    movieName: string;
    rating: number;
    date: number;
    ratingFactor: number;
    constructor(userName: string, movieName: string, rating: number, userRole: Role) {
        this.id = generateReviewId(userName, movieName);
        this.userName = userName;
        this.movieName = movieName;
        this.date = Date.now();
        this.rating = rating;
        this.ratingFactor = userRole.valueOf();
    }
};

export interface ReviewInput {
    userName: string;
    movieName: string;
    rating: number;
}