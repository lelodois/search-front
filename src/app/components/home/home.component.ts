import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../provider/service/auth.service';
import {EventsService} from '../../provider/service/events.service';
import {User} from '../../provider/model/user.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    admin = undefined;
    user: User = undefined;

    constructor(private authService: AuthService,
                private router: Router) {

    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['login']);
    }

    ngOnInit(): void {
        this.authService.getLoggedUser()
            .subscribe(user => {
                this.user = user;
                this.admin = (
                    user.authorities != undefined
                    && user.authorities
                    && user.authorities
                        .filter(item => item.authority == 'ROLE_ADMIN')
                        .length > 0
                );
            });

    }
}
