import { Genre } from "./Genre";

export class Movie {
    private _name: string;
    private _year: Date;
    private _genres: Array<Genre>;
    constructor(name, year, genres: Array<Genre>) {
        this._name = name;
        this._year = year;
        this._genres = genres;
    }

    get name () {
        return this._name;
    }
    get year() {
        return this._year;
    }
    get genres() {
        return this._genres;
    }
};

export interface MovieInput {
    name: string;
    year: number;
    genres?: Array<string>;
}
