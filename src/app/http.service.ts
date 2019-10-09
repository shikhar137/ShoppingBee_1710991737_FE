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

}
