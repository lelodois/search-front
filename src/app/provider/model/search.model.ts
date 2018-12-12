import {Result} from './result.model';

export class Search {

    private _results: Array<Result> = [];
    private _text: string;

    get results(): Array<Result> {
        return this._results;
    }

    set results(value: Array<Result>) {
        this._results = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

}