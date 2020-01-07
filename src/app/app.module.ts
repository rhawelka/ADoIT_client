import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './authentication.service';
import {AuthGuardService} from './auth-guard.service';
import {HomeComponent} from './home/home.component';

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]}
]

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, RouterModule
    ],
    providers: [AuthGuardService,AuthenticationService],
    bootstrap: [AppComponent]
})
export class AppModule {}
