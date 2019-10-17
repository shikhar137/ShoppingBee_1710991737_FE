import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  productName;
  productPrice;
  category;
  description;
  heading;
  user;
  constructor(private httpClientService: HttpService,private router:Router) { }

  ngOnInit() {
    
  }
  addItem()
  {
  let json={
    "heading":this.heading,
  "productName":this.productName,
  "productPrice":this.productPrice,
  "category":this.category,
  "description":this.description,
  "active":1,
  "img":"Smartphones.jpg"
  };
  this.httpClientService.addItem(json).subscribe(
    response =>{console.log(response);
      alert("Product successfully added");}
    );
    }
}
