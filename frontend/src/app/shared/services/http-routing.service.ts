import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonHttpService } from './common-http.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRoutingService {

  constructor(
    private httpService: CommonHttpService
  ) { }

  getStudentDetails() {
    return this.httpService.getMethod('/view-list');
  }

  addStudentDetails(data:any) {
    return this.httpService.postMethod('/add-list',data);
  }

  editStudentDetails(data: any, queryParam: any) {
    return this.httpService.putMethod('/add-list', data, queryParam);
  }

  getOneStudentDetails(id: number) {
    return this.httpService.getMethod(`/view-list/${id}`)
  }
}
