import {Injectable} from '@angular/core';

@Injectable()
export class GlobalInfo {
  // 用户信息
  public user = {
    nickName: '',
    avatar: '',
    token: ''
  };
}
