import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';

@Component({
  selector: 'app-hybrid-apps',
  templateUrl: './hybrid-apps.component.html',
  styleUrls: ['./hybrid-apps.component.css']
})
export class HybridAppsComponent implements OnInit {

  constructor(public bs: BaseService) { }

  ngOnInit() {
    this.bs.bgclassnav = true;
    
    
  }

}
