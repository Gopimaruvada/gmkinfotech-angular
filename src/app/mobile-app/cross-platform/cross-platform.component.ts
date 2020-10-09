import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';

@Component({
  selector: 'app-cross-platform',
  templateUrl: './cross-platform.component.html',
  styleUrls: ['./cross-platform.component.css']
})
export class CrossPlatformComponent implements OnInit {


  constructor(public bs: BaseService) {

  }

  ngOnInit() {
    this.bs.bgclassnav = true;
  }


}
