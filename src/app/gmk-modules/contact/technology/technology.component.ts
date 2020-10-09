import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

 
  constructor(public bs: BaseService) {

  }

  ngOnInit() {
    this.bs.bgclassnav = true;
  }

}
