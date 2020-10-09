import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';

@Component({
  selector: 'app-how-we-work',
  templateUrl: './how-we-work.component.html',
  styleUrls: ['./how-we-work.component.css']
})
export class HowWeWorkComponent implements OnInit {

  constructor(public bs: BaseService) {

  }

  ngOnInit() {
    this.bs.bgclassnav = true;
  }

}
