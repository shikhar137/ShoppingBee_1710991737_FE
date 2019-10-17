import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
cart:any;
  constructor(private service : HttpService) { }

  ngOnInit() {
    return this.service.getorderhistory().subscribe( (data)=> 
    {
      this.cart = data ;

    });
  }

}
