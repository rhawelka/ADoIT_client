import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterComponent} from './register.component';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('RegisterComponent', () => {
    let component : RegisterComponent;
    let fixture : ComponentFixture < RegisterComponent >;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule, FormsModule, HttpClientModule, RouterTestingModule.withRoutes([])
            ],
            declarations: [RegisterComponent],
            providers: [AuthenticationService]
        }).compileComponents();

        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have <label> with first name works>', () => {
        const personElement : HTMLElement = fixture.nativeElement;
        const label = personElement.querySelectorAll('label');
        expect(label[0].textContent).toEqual('First Name');
    });
    it('initialises the form', () => {
      expect(component).toBeTruthy();
      expect(fixture).toBeTruthy();
      expect(component).not.toBeNull();
      expect(fixture).not.toBeNull();
  });

});
afterEach(() => {
    TestBed.resetTestingModule();
});
