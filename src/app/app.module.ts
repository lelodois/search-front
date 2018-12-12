import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {APP_ROUTERS} from './app.router';
import {SearchComponent} from './components/search/search.component';
import {RouterModule} from '@angular/router';
import {EventsService} from './provider/service/events.service';
import {SearchClientService} from './provider/service/search-client.service';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {AuthService} from './provider/service/auth.service';
import {AuthGuard} from './provider/service/auth-guard.service';

@NgModule({
    imports:
        [
            HttpClientModule,
            BrowserModule,
            RouterModule,
            FormsModule,
            NgxPaginationModule,
            APP_ROUTERS
        ],
    declarations:
        [
            AppComponent,
            SearchComponent,
            SearchResultComponent,
            HomeComponent,
            LoginComponent,
            UserListComponent
        ],
    exports:
        [
            SearchComponent,
            SearchResultComponent,
            LoginComponent,
            UserListComponent
        ],

    providers:
        [
            AuthService,
            AuthGuard,
            EventsService,
            SearchClientService,
        ],
    bootstrap:
        [
            AppComponent
        ]
})
export class AppModule {
}
