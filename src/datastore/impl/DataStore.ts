import { ID, MSN } from "../../utils/customTypes";
import { ReadIteratorAsStream } from "../../utils/ReadArrayAsStream";
import { IDataStore } from "../IDataStore";

export class DataStore<T> implements IDataStore<T> {
    private collection: Map<ID, T>;
    constructor() {
        this.collection = new Map<ID, T>();
    }

    add(id: ID, element: T): void {
        this.collection.set(id, element);
    }

    remove(id: ID): void {
        this.collection.delete(id);
    }

    get(id: ID): T {
        return this.collection.get(id);
    }

    getAll(): ReadIteratorAsStream<T> {
        return new ReadIteratorAsStream<T>(this.collection.values());
    }
};
