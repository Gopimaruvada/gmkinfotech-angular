import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

 

  constructor(public bs: BaseService) {

  }

  ngOnInit() {
    this.bs.bgclassnav = true;
  }

}
