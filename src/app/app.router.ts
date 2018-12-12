import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './provider/service/auth-guard.service';

export const APP_ROUTERS: ModuleWithProviders =
    RouterModule.forRoot(
        [
            {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
            {path: 'login', component: LoginComponent},
            {path: '**', redirectTo: 'login'}
        ], {useHash: false}
    );