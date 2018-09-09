import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

interface StockData {
  code: string;
  name: string;
  openPrice: number;
  closePrice: number;
  nowPrice: number;
  maxPrice: number;
  minPrice: number;
  range: number;
}

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
  stockData = null;

  constructor(private api: ApiService) {
  }

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
    if (code.length !== 6) {
      return;
    }
    const vm = this;
    this.api.get(ApiService.APIS.StockData, {}, res => {
      vm.stockData = res.data;
    });
  }
}
