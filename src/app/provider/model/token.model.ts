export class Token {

    private _access_token: string;
    private _token_type: string;

    get access_token(): string {
        return this._access_token;
    }

    set access_token(value: string) {
        this._access_token = value;
    }

    get token_type(): string {
        return this._token_type;
    }

    set token_type(value: string) {
        this._token_type = value;
    }
}