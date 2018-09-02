import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/weui.min.css']
})
export class AppComponent implements OnInit {
  avatarUrl = '';
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
