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
}
