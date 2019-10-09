import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AppService } from '../app.service';
import { Command } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username ;
password ;
  constructor( private router: Router , private authService : AuthenticationService , private service:AppService) { }

  ngOnInit() {
    if( this.service.checkLogin())
    {
      this.router.navigate(['home']);
    }
  }
login()
{
  this.authService.authenticate( this.username , this.password ).subscribe (
    data =>
    {
      this.service.isLoggedIn(true);
      this.router.navigate(['/home']);
    }

  );
}
}
