import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { ProfileComponent } from './profile.component';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports:[HttpClientModule,RouterTestingModule.withRoutes([])],
      providers: [AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have <td> with first name works>', () => {
    const personElement: HTMLElement = fixture.nativeElement;
    const td = personElement.querySelectorAll('td');
    expect(td[0].textContent).toEqual('First Name');
  });
  it('should have <td> with last name works>', () => {
    const personElement: HTMLElement = fixture.nativeElement;
    const td = personElement.querySelectorAll('td');
    expect(td[2].textContent).toEqual('Last Name');
  });
  it('should have <td> with email works>', () => {
    const personElement: HTMLElement = fixture.nativeElement;
    const td = personElement.querySelectorAll('td');
    expect(td[4].textContent).toEqual('Email');
  });
});
