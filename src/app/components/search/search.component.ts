import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {EventsService} from '../../provider/service/events.service';
import {SearchResultComponent} from '../search-result/search-result.component';
import {SearchClientService} from '../../provider/service/search-client.service';

declare var $: any;

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {

    modal = null;
    tipoPesquisa = 'name';
    resultadoPesquisa = undefined;

    @ViewChild('searchResultComponent')
    searchResultComponent: SearchResultComponent;

    constructor(private rootNode: ElementRef,
                private searchService: SearchClientService) {
    }

    ngAfterViewInit() {
        this.modal = $(this.rootNode.nativeElement).find('#modal');
    }

    setTipoPesquisa(newTipoPesquisa: string) {
        this.tipoPesquisa = newTipoPesquisa;
    }

    search(text: string, page: number) {
        this.resultadoPesquisa = undefined;
        text = text.trim();
        if (text == '' || text.length === 0) {
            this.resultadoPesquisa = 'Pesquise por algum texto :-/';
        } else {
            this.searchService.search(text, page, this.tipoPesquisa)
                .subscribe(
                    searchResultItem => {
                        this.resultadoPesquisa = 'Encontramos registros ;)';
                        this.searchResultComponent.start(searchResultItem);
                        this.modal.modal('show');

                        EventsService.searchResult.emit(searchResultItem);
                    },
                    error => {
                        this.resultadoPesquisa = 'Não encontramos nenhum registro :(';
                    }
                );
        }
    }

}
