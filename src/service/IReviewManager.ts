import { ReviewInput } from "../model/Review";

export interface IReviewManager {
    add(input: ReviewInput): void;

    remove(userName: string, movieName): void;

    printAllReviews(): void;
};