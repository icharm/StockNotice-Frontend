import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {AppModule} from '../app.module';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: [
    '../../assets/weui.min.css',
    './add.component.css'
  ]
})
export class AddComponent implements OnInit {
  riseCheck = false;
  dropCheck = false;
  stockPrice = null; // 股价
  range = null;      // 涨跌幅

  ngOnInit() {
    // 请求微信授权
    console.log('add rule.');
  }

  riseCheckClick(): void {
    this.riseCheck = !this.riseCheck;
  }

  dropCheckClick(): void {
    this.dropCheck = !this.dropCheck;
  }

  stockCodeChange(code): void {
    if ( code.length !== 6 ) {
      return;
    }
    // query server api for stock info
  }
}
