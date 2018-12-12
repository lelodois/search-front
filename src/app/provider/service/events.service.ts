import {EventEmitter} from '@angular/core';
import {Search} from '../model/search.model';

export class EventsService {

    static searchResult: EventEmitter<Search> = new EventEmitter<Search>(true);
    static loginErrorsEvents: EventEmitter<String> = new EventEmitter<String>(true);
    static loginSuccessEvents: EventEmitter<boolean> = new EventEmitter<boolean>(true);
    static loadingValidAuth: EventEmitter<boolean> = new EventEmitter<boolean>(true);
}