import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  
  constructor(public bs: BaseService) {

  }

  ngOnInit() {
    this.bs.bgclassnav = true;
  }


}
