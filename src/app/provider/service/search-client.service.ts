import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from '../../../../node_modules/rxjs/Observable';
import {Search} from '../model/search.model';
import {URL_SEARCH} from '../url-util.service';
import {AuthService} from './auth.service';

@Injectable()
export class SearchClientService {

    constructor(private http: HttpClient,
                private authService: AuthService) {
    }

    search(text: string, page: number, tipoPesquisa): Observable<Search> {
        const headers = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Authorization', this.authService.getToken());

        return this.http.get<Search>(`${URL_SEARCH}/${tipoPesquisa}/${text}/${page}`, {headers: headers});
    }
}

