import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';

@Component({
  selector: 'app-native-ios',
  templateUrl: './native-ios.component.html',
  styleUrls: ['./native-ios.component.css']
})
export class NativeIosComponent implements OnInit {


  constructor(public bs: BaseService) {

  }

  ngOnInit() {
    this.bs.bgclassnav = true;
  }


}
