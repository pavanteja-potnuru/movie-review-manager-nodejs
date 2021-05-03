import { IMovieManager, IReviewManager, IUserManager } from "../service/index";

export interface IServiceFactory {
    getUserManager(): IUserManager;

    getMovieManager(): IMovieManager;

    getReviewManager(): IReviewManager;
};
