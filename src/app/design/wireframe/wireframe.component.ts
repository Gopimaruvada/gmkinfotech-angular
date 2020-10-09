import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';

@Component({
  selector: 'app-wireframe',
  templateUrl: './wireframe.component.html',
  styleUrls: ['./wireframe.component.css']
})
export class WireframeComponent implements OnInit {

  constructor(public bs: BaseService) {

  }

  ngOnInit() {
    this.bs.bgclassnav = true;
  }

}
