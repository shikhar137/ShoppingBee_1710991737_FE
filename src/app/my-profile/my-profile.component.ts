import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
myprod ;

  constructor( private router: Router , private route : ActivatedRoute , private service2 : HttpService , private http:HttpClient) { }
disabled = true;
url='http://localhost:8080/profile/update';
  ngOnInit() {
    this.service2.getinfo().subscribe( data => 
    {
      this.myprod = data;
    });
  }
  history()
  {
    this.router.navigate(['/orderdetails']);
  }
  update()
  {
    
      const token = sessionStorage.getItem("token");
      const headers = new HttpHeaders( { Authorization : 'Basic ' + token });
      return this.http.put(this.url, this.myprod , {headers}).subscribe( data =>
        {
          console.log(data);
        });
     
  }
}

