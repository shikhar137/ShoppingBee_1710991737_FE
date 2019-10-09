import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
id ;
result ;

  constructor( private dataservice : DataService , private route: ActivatedRoute)
  {}

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.id = params.get('id');
    });
    this.dataservice.getProductById( this.id ).subscribe( response => {
      console.log(response);
      this.result=response[0];
      console.log(this.result);
    });
  }

}
