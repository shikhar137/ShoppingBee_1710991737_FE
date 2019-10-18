import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private router : Router , private service : AppService) { }

  ngOnInit() {
  }
logout()
{
  sessionStorage.removeItem( 'token ');
  this.service.isLoggedIn( false);
  this.router.navigate(['login']);

}
cart()
{
  this.router.navigate(['/usercart']);
}
showcart()
{
  this.router.navigate(['/usercart']);
}
showprofile()
{
  this.router.navigate(['/profile']);
}
addp()
{
  this.router.navigate(['addproduct']);
}
}
