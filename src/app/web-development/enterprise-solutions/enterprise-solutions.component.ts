import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';

@Component({
  selector: 'app-enterprise-solutions',
  templateUrl: './enterprise-solutions.component.html',
  styleUrls: ['./enterprise-solutions.component.css']
})
export class EnterpriseSolutionsComponent implements OnInit {



  constructor(public bs: BaseService) {

  }

  ngOnInit() {
    this.bs.bgclassnav = true;
  }
}
