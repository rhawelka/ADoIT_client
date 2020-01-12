import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginFormComponent} from './login-form.component';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginFormComponent', () => {
    let component : LoginFormComponent;
    let fixture : ComponentFixture < LoginFormComponent >;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule, RouterTestingModule.withRoutes([])
            ],
            declarations: [LoginFormComponent],
            providers: [AuthenticationService, HttpClient, HttpHandler]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        fixture
            .whenStable()
            .then(() => {
                component
                    .loginForm
                    .controls['first_name']
                    .setValue('test');
            })
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('initialises the form', () => {
        expect(component).toBeTruthy();
        expect(fixture).toBeTruthy();
        expect(component)
            .not
            .toBeNull();
        expect(fixture)
            .not
            .toBeNull();
    });
});
