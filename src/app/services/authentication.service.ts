import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { User } from '../models/user';

export interface UserDetails {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    exp: number;
    iat: number;
}

interface TokenResponse {
    token: string;
}

@Injectable()
export class AuthenticationService {
    private token : string;

    // tslint:disable-next-line: variable-name
    constructor(private _http: HttpClient, private _router: Router) {}

    private saveToken(token : string) {
        localStorage.setItem('userToken', token);
        this.token = token;
    }

    private getToken(): string {
        if(!this.token) {
            this.token = localStorage.getItem('userToken');
        }
        return this.token;
    }

    public getUserDetails(): UserDetails {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        } else {
            return null
        }
    }

    public isLoggedIn(): boolean {
        const user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        } else {
            return false;
        }
    }

    public register(user: User) : Observable<any>{
      const base = this._http.post('/users/register', user);

      const request = base.pipe(
        map((data: TokenResponse) => {
          if(data.token){
            this.saveToken(data.token)
          }
          return data;
        })
      )
      return request;
    }

    public login(user: User) : Observable<any>{
      const base = this._http.post('/users/login', user);

      const request = base.pipe(
        map((data: TokenResponse) => {
          if(data.token){
            this.saveToken(data.token)
          }
          return data;
        })
      )
      return request;
    }

    public profile(): Observable<any> {
      return this._http.get('/users/profile', {
        headers: {Authorization: `${this.getToken()}`}
      })
    }

    public todo(): Observable<any> {
      return this._http.get('/todo', {
        headers: {Authorization: `${this.getToken()}`}
      })
    }

    public logout(): void {
      this.token = '';
      window.localStorage.removeItem('userToken');
      this._router.navigateByUrl('/');
    }
}
