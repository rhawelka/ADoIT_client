import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './authentication.service';
import {AuthGuardService} from './auth-guard.service';
import {TasksService} from './tasks.service';
import {HomeComponent} from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        TasksComponent
    ],
    imports: [
        BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, RouterModule
    ],
    providers: [AuthGuardService,AuthenticationService, TasksService],
    bootstrap: [AppComponent]
})
export class AppModule {}
