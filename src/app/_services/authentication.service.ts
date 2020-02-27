import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { GlobalVariable } from './ConstantsService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private API_ENDPOINT = GlobalVariable.BASE_API_URL + 'Login/LoginDetails';
  constructor(private http: HttpClient) { }

  login(userName: string, password: string) {
    const grantType = 'password';
    debugger
    return this.http.post<any>(this.API_ENDPOINT, { Username: userName, Password: password, GrantType: grantType })
      .pipe(map(user => {
        debugger
        // login successful if there's a jwt token in the response
        user = user.authToken;
        if (user && user.Token) {
          debugger
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }),
        tap(data => { console.log(data); },
          error => {
            console.log(error);
          }
        ));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
