import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

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
  basePrice = null;
  dialogContent = null;
  dialogSwitch = false;

  rule = new FormGroup({
    code: new FormControl('', Validators.pattern('[0-9]*')),
    name: new FormControl({value: '', disabled: true}),
    ruleName: new FormControl(''),
    basePrice: new FormControl(''),
    riseCheck: new FormControl(false),
    risePrice: new FormControl(''),
    risePercent: new FormControl(''),
    dropCheck: new FormControl(false),
    dropPrice: new FormControl(''),
    dropPercent: new FormControl('')
  });

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    // 请求微信授权
    console.log('add rule.');
  }

  // 涨幅预警开关
  riseCheckClick(): void {
    this.rule.patchValue({riseCheck: this.riseCheck});
    this.riseCheck = !this.riseCheck;
  }

  // 跌幅预警开关
  dropCheckClick(): void {
    this.dropCheck = !this.dropCheck;
    this.rule.patchValue({dropCheck: this.dropCheck});
  }

  // 获取股票数据
  stockCodeChange(code): void {
    if (code.length !== 6) {
      return;
    }
    const vm = this;
    this.api.get(ApiService.APIS.StockData, {code: code}, res => {
      vm.stockData = res.data;
      // 设置规则名称前缀
      if (res.data) {
        this.rule.patchValue({ruleName: res.data.name + '-'});
      }
    });
  }

  // 使用现价Button事件
  useNowPrice(): void {
    if (this.stockData) {
      this.basePrice = this.stockData.nowPrice;
      this.rule.patchValue({basePrice: this.basePrice});
    }
  }

  // 计算涨幅
  risePriceKeyUp(): void {
    // 判断是否设置basePrice
    if (this.basePrice == null) {
      this.dialogContent = '请先设置基准价格';
      this.dialogSwitch = true;
      this.rule.patchValue({risePrice: ''});
      return;
    }
    // 计算涨幅
    const range = ((this.rule.value.risePrice - this.basePrice) / this.basePrice * 100).toFixed(2);
    this.rule.patchValue({risePercent: range + '%'});
  }

  // 计算跌幅
  dropPriceKeyUp(): void {
    // 判断是否设置basePrice
    if (this.basePrice == null) {
      this.dialogContent = '请先设置基准价格';
      this.dialogSwitch = true;
      this.rule.patchValue({dropPrice: ''});
      return;
    }
    // 计算涨幅
    const range = ((this.basePrice - this.rule.value.dropPrice) / this.basePrice * 100).toFixed(2);
    this.rule.patchValue({dropPercent: range + '%'});
  }

  // 提交数据
  onSubmit(): void {
    console.log(this.rule.value);
    // 校验数据
    console.log(this.stockData);
    if (!this.rule.value.code || !this.stockData || this.stockData.code !== this.rule.value.code) {
      this.stockData = null;
      this.dialogContent = '股票代码错误，请检查！';
      this.dialogSwitch = true;
      return;
    }
    if (!this.rule.value.basePrice || this.rule.value.basePrice <= 0) {
      this.dialogContent = '基准价格错误，请检查！';
      this.dialogSwitch = true;
      return;
    }
    const risePrice = this.rule.value.risePrice;
    if (this.riseCheck) {
      if (!risePrice || risePrice <= 0) {
        this.dialogContent = '涨幅预警价格错误，请检查！';
        this.dialogSwitch = true;
        return;
      }
      if (risePrice <= this.basePrice || risePrice <= this.stockData.nowPrice) {
        this.dialogContent = '涨幅预警价格不得低于基准价格或现价!';
        this.dialogSwitch = true;
        return;
      }
    }
    const dropPrice = this.rule.value.dropPrice;
    if (this.dropCheck) {
      if (!dropPrice || dropPrice) {
        this.dialogContent = '跌幅预警价格错误，请检查！';
        this.dialogSwitch = true;
        return;
      }
      if (dropPrice >= this.basePrice || dropPrice >= this.stockData.nowPrice) {
        this.dialogContent = '跌幅预警价格不得高于基准价格或现价!';
        this.dialogSwitch = true;
        return;
      }
    }
    console.log('校验通过');
    console.log(this.rule.value);
  }
}
