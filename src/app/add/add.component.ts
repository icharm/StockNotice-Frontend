import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: [
    '../../assets/weui.min.css',
    './add.component.css'
  ]
})
export class AddComponent implements OnInit {

  ngOnInit() {
    // 请求微信授权
    console.log('add rule.');
  }

  onClick(action): void {
    if (action === 'add') {
      console.log('add');
    } else if (action === 'list') {
      console.log('list');
    }
  }
}
