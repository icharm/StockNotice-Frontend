import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {GlobalInfo} from '../globalinfo';

@Component({
  selector: 'app-login',
  template: '',
  styleUrls: ['../../assets/weui.min.css']
})

export class LoginComponent implements OnInit {
  code = null;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private global: GlobalInfo,
    private router: Router
  ) {
    const vm = this;
    // console.log(vm.code);
    this.route.queryParams.subscribe(
      params => {
        // get authentication code
        vm.code = params.code;
      }
    );
    if (this.code) {
      // this code exist, then use authentication code to exchange userinfo.
      this.api.get(
        ApiService.APIS.Login,
        {code: vm.code},
        (res) => {
          // console.log(res.data);
          this.global.user = res.data;
        });
      // exchange completed, then route to index component.
      this.router.navigateByUrl('index');
    } else {
      // url param is wechat callback path (wechat will redirect to this path with authentication code).
      window.location.href = ApiService.URL_ROOT + ApiService.APIS.Authentication + '?url=http://all.icharm.me/login';
    }
  }

  ngOnInit() {}

}
