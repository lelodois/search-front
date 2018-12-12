import {Component, OnInit} from '@angular/core';
import {EventsService} from './provider/service/events.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'app';
    errorMessage: String = undefined;
    loading = false;

    ngOnInit(): void {
        EventsService.loginErrorsEvents.subscribe(
            message => {
                this.errorMessage = message;
                this.loading = false;
            });

        EventsService.loginSuccessEvents
            .subscribe(() => this.loading = false);

        EventsService.loadingValidAuth
            .subscribe(() => this.loading = true);
    }

}
