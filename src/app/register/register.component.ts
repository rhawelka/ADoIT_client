import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  @ViewChild('contactForm', {static: false})
  contactForm: NgForm;
  user = new User();

  constructor(private _auth: AuthenticationService, private router: Router) { }

  onSubmit(){
    this.register();
  }

  register() {
    console.log(this.user);
    this._auth.register(this.user).subscribe( () => {
      this.router.navigateByUrl('/profile');
    },
    err => {
      console.error(err);
    });
  }

  ngOnInit() {
  }

}
