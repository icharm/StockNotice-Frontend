import {Component, OnChanges} from '@angular/core';
import {GlobalInfo} from '../globalinfo';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../../assets/weui.min.css']
})
export class IndexComponent implements OnChanges {

  constructor(public global: GlobalInfo) {}

  ngOnChanges() {
  }

}
