import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../get-user.service';
import { posts } from '../posts';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  DATA : any;
post1=new posts("" , 0 , "" , "");
  constructor(private service:GetUserService) { }

  ngOnInit() {
  }
Onsubmit()
{
 location.assign('/login');

  this.service.post1_user(this.post1).subscribe(
    data => console.log("SUCCESS", data),
    error => console.log("ERROR",error)
  )
}
}
