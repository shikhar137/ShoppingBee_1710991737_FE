import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http:HttpClient) { }
  getAllItems()
  {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders({ Authorization : 'Basic ' + token });
    return this.http.get("http://localhost:8080/product/productdetails", {headers});
  }
  getItemsById(id)
  {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders( { Authorization : 'Basic' + token });
    return this.http.get("http://localhost:8080/product/products1/id/"+id, { headers });
  }
  getProductByCategory( category: String )
  {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders( { Authorization : 'Basic ' + token });
    return this.http.get("http://localhost:8080/product/products/category/"+category , {headers});
  }
  pricefilter( price1 , price2 )
  {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders( { Authorization : 'Basic ' + token });
    return this.http.get("http://localhost:8080/product/getbyprice/"+price1+"/"+price2 , {headers});
  }
  showcart()
  {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders( { Authorization : 'Basic ' + token });
    return this.http.get("http://localhost:8080/cart/showcart/recieve" , {headers});
  }
  addProductToCart( productid : Number )
  {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders( { Authorization : 'Basic ' + token });
    return this.http.get("http://localhost:8080/cart/addtocart/recieve/"+productid , {headers});
  }
  DeleteProduct( productid:Number )
  {
    console.log(productid);
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders( { Authorization : 'Basic ' + token });
    return this.http.get("http://localhost:8080/cart/deleteproduct/recieve/"+productid , {headers});
  }
  removeproductFromCart( prodid )
  {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders( { Authorization : 'Basic ' + token });
    return this.http.get("http://localhost:8080/cart/removeproduct/recieve/"+prodid , {headers});
  }
  checkout()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8080/cart/checkout/recieve",{headers});
  }
  getinfo()
  {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders( { Authorization : 'Basic ' + token });
    return this.http.get("http://localhost:8080/profile/get", {headers});
  }
  getorderhistory()
  {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders( { Authorization : 'Basic ' + token });
    return this.http.get("http://localhost:8080/cart/orderhistory/recieve", {headers});
  }
  addItem(json)
  {
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders( { Authorization : 'Basic ' + token });
    return this.http.post<any>("http://localhost:8080/product/addproduct",json, {headers});
  }

}
