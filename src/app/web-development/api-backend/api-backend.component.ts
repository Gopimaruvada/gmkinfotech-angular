import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';

@Component({
  selector: 'app-api-backend',
  templateUrl: './api-backend.component.html',
  styleUrls: ['./api-backend.component.css']
})
export class ApiBackendComponent implements OnInit {



  constructor(public bs: BaseService) {

  }

  ngOnInit() {
    this.bs.bgclassnav = true;
  }
}
