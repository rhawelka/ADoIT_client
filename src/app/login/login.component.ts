import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {NgForm} from '@angular/forms';

@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.css']})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm', {static: false})
  loginForm : NgForm;
  user = new User();

    constructor(private _auth : AuthenticationService, private router : Router) {}

    onSubmit(){
      this.login();
    }

    login() {
        this
            ._auth
            .login(this.user)
            .subscribe(() => {
                this
                    .router
                    .navigateByUrl('/todo');
            }, err => {
                console.error(err);
            });
    }

    ngOnInit() {}

}
