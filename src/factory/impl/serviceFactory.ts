import { IMovieManager, IReviewManager, IUserManager } from "../../service/index";
import { MovieManager, ReviewManager, UserManager } from "../../service/impl/index";
import { IServiceFactory } from "../IServiceFactory";
import { IStorageFactory } from "../IStorageFactory";

export class ServiceFactory implements IServiceFactory {
    
    userManager: IUserManager;
    movieManager: IMovieManager;
    reviewManager: IReviewManager;
    constructor(storageFactory: IStorageFactory) {
        this.userManager = new UserManager(storageFactory.getUserDS());
        this.movieManager = new MovieManager(storageFactory.getMovieDS());
        this.reviewManager = new ReviewManager(storageFactory);
    }

    getUserManager(): IUserManager {
        return this.userManager;
    }

    getMovieManager(): IMovieManager {
        return this.movieManager;
    }

    getReviewManager(): IReviewManager {
        return this.reviewManager;
    }
};
