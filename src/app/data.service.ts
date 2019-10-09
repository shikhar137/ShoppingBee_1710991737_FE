import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient ) { }
  products()
  {
    return this.http.get("http://localhost:8080/product/productdetails");
  }
  getproductByCategory( category : String )
  {
    return this.http.get("http://localhost:8080/product/products/category/"+category);
}
getProductById( id : Number )
{
  return this.http.get("http://localhost:8080/product/products1/id/"+id);
}
getBypricefilter(price1,price2)
{
  return this.http.get("http://localhost:8080/product/getbyprice/"+price1+"/"+price2);
}
}
