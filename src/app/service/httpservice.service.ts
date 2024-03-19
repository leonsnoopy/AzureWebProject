import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }

  getHttp(url: string){
    return this.http.get(url);
  }

  post(url:string, body:any, options?:any){
    return this.http.post(url,body,options);
  }

  sendLineNotifyApi(msg:string) {
    console.log(msg);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://arxan.gss.com.tw/api/arxan_detected', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      message: msg
    }));
  }
  
  
}
