import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalVariable } from './ConstantsService.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
    private _EmpDetailApi = GlobalVariable.BASE_API_URL + '/TestEmp/EmpDetails';

    constructor(private http: HttpClient) { }

    getAll(userId: any) {
        debugger
        const userDtls = this.getUserDetails();
        const xsrftoken = userDtls.Token;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': xsrftoken,
                'X-Frame-Options': 'DENY',
                observe: 'response',
            })
        };
        return this.http.post<any>(this._EmpDetailApi,
            { UserId: userId }, httpOptions)
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
    getUserDetails() {
        let result;
        if (localStorage.getItem('currentUser') !== null && localStorage.getItem('currentUser') !== undefined) {
            result = JSON.parse(localStorage.getItem('currentUser'));
            return result;
        }
    }
}
