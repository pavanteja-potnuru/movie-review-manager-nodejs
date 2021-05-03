import { ID } from "../utils/customTypes";
import { ReadIteratorAsStream } from "../utils/ReadArrayAsStream";

export interface IDataStore<T> {

    add(id: ID, element: T): void;

    remove(id: ID): void;

    get(id: ID): T;

    getAll(): ReadIteratorAsStream<T>;
};
