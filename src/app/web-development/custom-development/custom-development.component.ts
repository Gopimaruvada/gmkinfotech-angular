import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';

@Component({
  selector: 'app-custom-development',
  templateUrl: './custom-development.component.html',
  styleUrls: ['./custom-development.component.css']
})
export class CustomDevelopmentComponent implements OnInit {

  

  constructor(public bs: BaseService) {

  }

  ngOnInit() {
    this.bs.bgclassnav = true;
  }

}
