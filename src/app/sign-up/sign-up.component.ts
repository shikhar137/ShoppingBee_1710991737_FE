import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../get-user.service';
import { posts } from '../posts';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  DATA : any;
post1=new posts("" , 1 , "" , "");
  constructor(private service:GetUserService , private router: Router) { }

  ngOnInit() {
  }
Onsubmit()
{
 

  this.service.post1_user(this.post1).subscribe(
    data => console.log("SUCCESS", data),
    error => console.log("ERROR",error)
  )
  this.router.navigate(['login']);
}
}
