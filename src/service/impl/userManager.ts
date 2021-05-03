import { IDataStore } from '../../datastore/IDataStore';
import { User } from '../../model/User';
import { IUserManager } from '../IUserManager';

export class UserManager implements IUserManager {
    private userDS: IDataStore<User>;
    constructor(userDS: IDataStore<User>) {
        this.userDS = userDS;
    }

    add(name:string) {
        this.userDS.add(name, new User(name));
    }

    remove(name: string) {
        this.userDS.remove(name);
    }

    printAllUsers(): void {
        this.userDS.getAll().on('data', (data: User) => {
            console.log('user: ', data.name);
        });
    }
};
