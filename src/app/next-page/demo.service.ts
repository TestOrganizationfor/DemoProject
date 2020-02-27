import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }


  getProduct(): Observable<any> {
    const xsrftoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIiLCJqdGkiOiI0ODExZTM4MC1iNmI4LTQxMzAtYmMxNS1iZGJmOTgyN2Rh' +
      'ODQiLCJuYW1laWQiOiIiLCJyb2xlIjoiMCIsIkxvZ2dlZE9uIjoiMi8yNC8yMDIwIDExOjQyOjU3IEFNIiwiRGlzcGxheU5hbWUiOiJSYW1rcmlzaG5hIEdhcyB' +
      'BZ2VuY3kiLCJSZWZObyI6IjE1MTM5IiwiUm9sZUlkIjoiMCIsIm5iZiI6MTU4MjUyNDc3NywiZXhwIjoxNTgyNzQwNzc3LCJpYXQiOjE1ODI1MjQ3NzcsImlzcy' +
      'I6Ik15U3VwZXJLZXlNeVN1cGVyS2V5TXlTdXBlcktleU15U3VwZXJLZXlNeVN1cGVyS2V5TXlTdXBlcktleSIsImF1ZCI6Ik15U3VwZXJLZXlNeVN1' +
      'cGVyS2V5TXlTdXBlcktleU15U3VwZXJLZXlNeVN1cGVyS2V5TXlTdXBlcktleSJ9.HncrrBdfUk0EY9otEPTouLkfWtEK0XW5Sa245h9a5fc';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': xsrftoken,
        'X-Frame-Options': 'DENY',
        observe: 'response',
      })
    };
    return this.http.get('http://aclpune.com/emsapi/api/Employee', httpOptions).pipe(
      map(result => {
        // login successful if there's a jwt token in the response
        if (result) {
        }
        return result;
      }),
      tap(data => { // Add Thid Tap to all services
        console.log(data);
      },
        error => {
          console.log(error);
        }
      )
    );
  }
  PostSignIn(): Observable<any> {
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    // var Body = { 'UserName': username, 'Password': password };
    const grantType = 'password';
    // pipe() let you combine multiple functions into a single function.
    // pipe() runs the composed functions in sequence.
    const userName = '12550950';
    const password = 'lpg@123';


    const xsrftoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIiLCJqdGkiOiI0ODExZTM4MC1iNmI4LTQxMzAtYmMxNS1iZGJmOTgyN2Rh' +
      'ODQiLCJuYW1laWQiOiIiLCJyb2xlIjoiMCIsIkxvZ2dlZE9uIjoiMi8yNC8yMDIwIDExOjQyOjU3IEFNIiwiRGlzcGxheU5hbWUiOiJSYW1rcmlzaG5hIEdhcyB' +
      'BZ2VuY3kiLCJSZWZObyI6IjE1MTM5IiwiUm9sZUlkIjoiMCIsIm5iZiI6MTU4MjUyNDc3NywiZXhwIjoxNTgyNzQwNzc3LCJpYXQiOjE1ODI1MjQ3NzcsImlzcy' +
      'I6Ik15U3VwZXJLZXlNeVN1cGVyS2V5TXlTdXBlcktleU15U3VwZXJLZXlNeVN1cGVyS2V5TXlTdXBlcktleSIsImF1ZCI6Ik15U3VwZXJLZXlNeVN1' +
      'cGVyS2V5TXlTdXBlcktleU15U3VwZXJLZXlNeVN1cGVyS2V5TXlTdXBlcktleSJ9.HncrrBdfUk0EY9otEPTouLkfWtEK0XW5Sa245h9a5fc';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': xsrftoken,
        'X-Frame-Options': 'DENY',
        observe: 'response',
      })
    };
    return this.http.post<any>('http://3.1.188.168/sdsapi/Login/LoginDetails2',
      { Username: userName, Password: password, GrantType: grantType }, httpOptions)
      .pipe(
        map(result => {
          // login successful if there's a jwt token in the response
          console.log(result);
          return result;
        }),
        tap(data => { console.log(data); },
          error => {
            console.log(error);
          }
        )
      );
  }
}
