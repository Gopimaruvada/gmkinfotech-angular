import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';

@Component({
  selector: 'app-continuos-delivery',
  templateUrl: './continuos-delivery.component.html',
  styleUrls: ['./continuos-delivery.component.css']
})
export class ContinuosDeliveryComponent implements OnInit {


  constructor(public bs: BaseService) {

  }

  ngOnInit() {
    this.bs.bgclassnav = true;
  }
}
