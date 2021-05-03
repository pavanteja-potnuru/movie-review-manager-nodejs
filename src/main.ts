import { ServiceFactory } from "./factory/impl/serviceFactory";
import { StorageFactory } from "./factory/impl/storageFactory";
import { IMovieManager, IReviewManager } from "./service";
import { IUserManager } from "./service/IUserManager";


const storageFactory: StorageFactory = new StorageFactory();
const serviceFactory: ServiceFactory = new ServiceFactory(storageFactory);

const userService: IUserManager = serviceFactory.getUserManager();
const movieService: IMovieManager = serviceFactory.getMovieManager();
const reviewService: IReviewManager = serviceFactory.getReviewManager();

userService.add('Pavan Teja');
userService.add('Harsh Vardhan');
userService.add('Yeshwanth');
userService.printAllUsers();

movieService.add({
    name: 'Bahubali 1', 
    year: 2015
});
movieService.add({
    name: 'Bahubali 2', 
    year: 2017
});
movieService.add({
    name: 'Avatar',
    year: 2009
});
movieService.add({
    name: 'spiderman-nwh',
    year: 2022
});
movieService.printAllMovies();


reviewService.add({
    userName: 'Pavan Teja',
    movieName: 'Bahubali 2',
    rating: 9
});
reviewService.add({
    userName: 'Pavan Teja',
    movieName: 'Bahubali 2',
    rating: 10
});
reviewService.add({
    userName: 'Pavan Teja',
    movieName: 'Bahubali 2',
    rating: 10
});
reviewService.printAllReviews();