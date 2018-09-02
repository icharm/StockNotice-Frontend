import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../../assets/weui.min.css']
})
export class IndexComponent implements OnInit {
  avatarUrl = 'Hello Angular';
  userName = 'My New Name';

  ngOnInit() {
    // 请求微信授权
  }

  // onClick(action): void {
  //   if (action === 'add') {
  //     console.log('add');
  //   } else if (action === 'list') {
  //     console.log('list');
  //   }
  // }
}
