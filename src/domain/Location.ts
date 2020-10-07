export default class Location {
    private _line : string;
    private _column : string;

    constructor(column : string , line : string, ) {
        const regexpLine = new RegExp('[12345678]');
        const regexpCol = new RegExp('[abcdefgh]');

        if (!regexpLine.test(line)) {
            throw new Error('wrong line');
        }

        if (!regexpCol.test(column)) {
            throw new Error('wrong column');
        }

        this._line = line;
        this._column = column

    }

    get line() : string {
        return this._line;
    }

    get column() : string {
        return this._column;
    }

    public toString() : string {
        return `${this._column}${this._line}`;
    }
}