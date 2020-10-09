import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/Base.service';

@Component({
  selector: 'app-native-android',
  templateUrl: './native-android.component.html',
  styleUrls: ['./native-android.component.css']
})
export class NativeAndroidComponent implements OnInit {


  constructor(public bs: BaseService) {

  }

  ngOnInit() {
    this.bs.bgclassnav = true;
  }


}
