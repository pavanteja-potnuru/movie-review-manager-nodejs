import { Readable } from 'stream';
export class ReadIteratorAsStream<T> extends Readable {
    private arrIterator: IterableIterator<T>;
    constructor(arrIterator) {
        super({
            objectMode: true
        });
        this.arrIterator = arrIterator;
    }

    _read() {
        let it = this.arrIterator.next();
        if(it.done) this.push(null);
        else this.push(it.value);
    }
}
