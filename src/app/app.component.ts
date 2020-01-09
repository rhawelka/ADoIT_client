import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import jsonData from '../assets/particles.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public auth: AuthenticationService){}

  params: object = {};
  style = {
    'position': 'absolute',
    "display":"block",
    "top": 0,
    "left": 0,
    "z-index": -1,
    "width": "100%",
    "height": "100%"
  }

  ngOnInit(): void {
    this.params = jsonData;
  }
}
