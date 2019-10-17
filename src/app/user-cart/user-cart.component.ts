import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
public cart;
total=0;
i;
  constructor(private route : Router , private service : HttpService , private activatedroute : ActivatedRoute) { }

  ngOnInit() {
    return this.service.showcart().subscribe((data) => 
    {
      this.cart = data ;
      this.findtotal();
      this.findtotal1();
    })
  }
  deleteproduct(id)
{
  this.service.DeleteProduct(id).subscribe( ( data ) =>
  {
    this.service.showcart().subscribe( (data1) => { this.cart = data1 ;})
  });

}
decreaseproduct(rid:number)
{
  this.service.removeproductFromCart(rid).subscribe( ( data ) =>
  {
    this.service.showcart().subscribe( (data2) => { this.cart = data2 ; this.findtotal1()})
  });

}
increaseproduct(aid:number)
{
  this.service.addProductToCart(aid).subscribe( ( data ) =>
  {
    this.service.showcart().subscribe( (data3) => { this.cart = data3 ; this.findtotal()});
    this.ngOnInit;
  });

}
findtotal()
{
  this.total=0;
  for( this.i=0 ; this.i<this.cart.length ; this.i++ )
  {
    this.total += this.cart [ this.i ].items.productPrice * this.cart[this.i].quantity ;
  }
}
findtotal1()
{
  this.total=0;
  for( this.i=0 ; this.i<this.cart.length ; this.i++ )
  {
    this.total = this.cart [ this.i ].items.productPrice * this.cart[this.i].quantity - this.total;
  }
}
checkOut()
{
  this.service.checkout().subscribe((data5) => 
  {
    this.route.navigate(['/orderhistory']);
  })
}

}
