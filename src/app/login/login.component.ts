import { Component, OnInit } from '@angular/core';
import {AuthenticationService, TokenPayload} from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  constructor(private _auth: AuthenticationService, private router: Router) { }

  login() {
    this._auth.login(this.credentials).subscribe( () => {
      this.router.navigateByUrl('/todo')
    },
    err => {
      console.error(err);
    });
  }

  ngOnInit() {
  }

}
