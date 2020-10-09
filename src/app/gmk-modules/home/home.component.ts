import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public bs: BaseService) {

  }

  ngOnInit() {
    this.bs.bgclassnav = false;
  }

 

}
