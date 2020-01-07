import { Component, OnInit } from '@angular/core';
import {AuthenticationService, TokenPayload} from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  constructor(private _auth: AuthenticationService, private router: Router) { }

  register() {
    this._auth.register(this.credentials).subscribe( () => {
      this.router.navigateByUrl('/profile')
    },
    err => {
      console.error(err);
    });
  }

  ngOnInit() {
  }

}
