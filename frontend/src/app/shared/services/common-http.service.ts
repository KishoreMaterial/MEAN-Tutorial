import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(
    private http: HttpClient
  ) { }

  url = environment._url;

  getMethod(url:string) {
    return this.http.get(this.url+url)
  }

  postMethod(url:string,data:any) {
    return this.http.post(this.url+url,data)
  }

  putMethod(url: any, data: any, queryParam: any) {
    return this.http.put(this.url + url, data, {
      params: queryParam,
    })
  }

  deleteMethod(url: any) {
    return this.http.delete(this.url + '/v1' + url)
  }
}
