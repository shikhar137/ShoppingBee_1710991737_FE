import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
result:any;
  constructor(private activatedroute: ActivatedRoute , private dataservice: DataService, private router:Router , private service1:HttpService) { 
    this.dataservice.products().subscribe(res => { this.result = res; console.log(this.result) })
  }
  
  ngOnInit() {

  }
  onclick1(id)
  {
    this.router.navigate(['/productdetails',id]);
  }
  showCategory(category)
  {
    if(category == 'All')
    {
      this.dataservice.products().subscribe(response => {this.result=response;})
    }
    else
    {
      this.dataservice.getproductByCategory(category).subscribe(response => { this.result = response ; console.log( this.result)})
    }
  }
  showpricefilters($event , number1:number , number2:number)
  {
    this.dataservice.getBypricefilter(number1,number2).subscribe( (data) => { this.result = data ; });
  }
  addProduct(pid)
  {
    this.service1.addProductToCart(pid).subscribe((data) => 
    { console.log(data);
      alert(" Success !! Product Is Added To The Cart");
  });

}

}
