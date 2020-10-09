import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';

@Component({
  selector: 'app-development',
  templateUrl: './product-development.html',
  
})
export class ProductdevelopmentComponent implements OnInit {

 

  constructor(public bs: BaseService) {

  }

  ngOnInit() {
    this.bs.bgclassnav = true;
  }
}
