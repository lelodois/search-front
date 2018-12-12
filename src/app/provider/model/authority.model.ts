export class Authority {

    private _authority: string;

    get authority(): string {
        return this._authority;
    }

    set authority(value: string) {
        this._authority = value;
    }
}