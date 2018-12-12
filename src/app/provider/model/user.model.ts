import {Authority} from './authority.model';

export class User {

    private _authenticated: boolean;
    private _name: string;
    private _authorities: Authority[] = [];

    get authorities(): Authority[] {
        return this._authorities;
    }

    set authorities(value: Authority[]) {
        this._authorities = value;
    }

    get authenticated(): boolean {
        return this._authenticated;
    }

    set authenticated(value: boolean) {
        this._authenticated = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}