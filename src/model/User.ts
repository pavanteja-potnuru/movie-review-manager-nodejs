import Role from './Role';
export class User {
    private _name: string;
    private _role: Role;
    constructor(name) {
        this._name = name;
        this._role = Role.viewer;
    }

    get name(): string {
        return this._name;
    }

    get role(): Role {
        return this._role;
    }
};
