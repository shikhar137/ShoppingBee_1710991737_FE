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
  data : any;
post1=new posts("" , 1 , "" , "fff");
  constructor(private service:GetUserService , private router: Router) { }

  ngOnInit() {
  }
onsubmit()
{
 
  this.router.navigate(['login']);
  this.service.post1_auth(this.post1).subscribe(
    data => console.log("SUCCESS", data),
    error => console.log("ERROR",error)
  )
  
}
}
