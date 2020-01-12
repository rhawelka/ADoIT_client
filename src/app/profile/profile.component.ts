import { Component, OnInit } from '@angular/core';
import {AuthenticationService, UserDetails} from '../services/authentication.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthenticationService]
})
export class ProfileComponent implements OnInit {

  details: UserDetails;

  constructor(private _auth: AuthenticationService) { }

  ngOnInit() {
    this._auth.profile().subscribe(
      user => {
        this.details = user;
      },
      err => {
        console.error(err);
      }
    )
  }

}
