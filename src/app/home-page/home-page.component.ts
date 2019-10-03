import { Component, OnInit } from '@angular/core';
import {products} from './products.constant';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
products=products;
  constructor(private router:Router) { }

  ngOnInit() {

  }
  onclick1(id)
  {
    this.router.navigate(['/productdetails',id]);
  }

}
