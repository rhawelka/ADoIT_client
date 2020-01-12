import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';



import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './services/authentication.service';
import {AuthGuardService} from './services/auth-guard.service';
import {TasksService} from './services/tasks.service';
import {HomeComponent} from './home/home.component';
import {TasksComponent} from './tasks/tasks.component';
import {ParticlesModule} from 'angular-particle';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {RouterTestingModule} from '@angular/router/testing';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule,
        ParticlesModule,
        RouterTestingModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        TasksComponent,
        LoginFormComponent
    ],
    providers: [
        AuthGuardService, AuthenticationService, TasksService
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
