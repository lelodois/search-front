import {Component, Input} from '@angular/core';
import {Search} from '../../provider/model/search.model';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {

    @Input()
    ativo = false;
    search: Search;

    start(search: Search) {
        this.search = search;
        this.ativo = true;
    }
}
