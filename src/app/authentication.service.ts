import { Injectable } from '@angular/core';
import { HttpHeaders  , HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private http:HttpClient) { }
  authenticate( username , password )
  {
    const headers = new HttpHeaders( { Authorization : 'Basic ' + btoa(username + ':' + password )});
    return this.http.get('http://localhost:8080/auth/validuser',{headers}).pipe(
      map( data =>
        {
          sessionStorage.setItem('token' , btoa(username + ':' + password ));
          return data ;
        })
    );
  }
}
