import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

export interface Response {
  errorCode: string;
  message: string;
  data: any;
}

@Injectable()
export class ApiService {
  static URL_ROOT = 'http://localhost';
  static APIS = {
    StockData: '/common/stock-data',
  };

  constructor(private http: HttpClient) {
  }

  static handleParams(params?: Object) {
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    return httpParams;
  }

  public get(url, params?: Object, cb?: Function) {
    const httpParams = ApiService.handleParams(params);
    this.http.get<Response>(ApiService.URL_ROOT + url, {params: httpParams})
      .subscribe(
        body => {
          console.log('GET request ended with SUCCESS.', body);
          cb(body);
        },
        response => {
          console.log('GET request ended with ERROR.', response);
        }
      );
  }

  public post(url, params?: Object, cb?: Function) {
    const httpParams = ApiService.handleParams(params);
    this.http.post<Response>(ApiService.URL_ROOT + url, {params: httpParams})
      .subscribe(
        body => {
          console.log('POST request ended with SUCCESS.', body);
          cb(body);
        },
        response => {
          console.log('POST request ended with ERROR.', response);
        }
      );
  }

  public put(url, params?: Object, cb?: Function) {
    const httpParams = ApiService.handleParams(params);
    this.http.put<Response>(ApiService.URL_ROOT + url, {params: httpParams})
      .subscribe(
        body => {
          console.log('PUT request ended with SUCCESS.', body);
          cb(body);
        },
        response => {
          console.log('PUT request ended with ERROR.', response);
        }
      );
  }

  public delete(url, params?: Object, cb?: Function) {
    const httpParams = ApiService.handleParams(params);
    this.http.delete<Response>(ApiService.URL_ROOT + url, {params: httpParams})
      .subscribe(
        body => {
          console.log('DELETE request ended with SUCCESS.', body);
          cb(body);
        },
        response => {
          console.log('DELETE request ended with ERROR.', response);
        }
      );
  }
}
