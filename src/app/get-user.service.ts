import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { posts } from './posts';
@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http : HttpClient) { }

  post1_user( posts : posts )
  {
    console.log(posts);
    return this.http.post<any>('http://localhost:8080/auth/addUsers' , posts , { headers :new HttpHeaders({ 'Content-Type': 'application/json'})});
  }
}
