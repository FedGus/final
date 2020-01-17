import { Injectable } from '@angular/core';
import { BaseApi } from './base-api';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsApiService extends BaseApi {
  header: HttpHeaders;
  url = "notes";
  constructor(httpClient: HttpClient) {
    super (httpClient);
    this.header = new HttpHeaders();
    this.header.set('Content-type', 'application/json');
  }
  async getNotes() {
    return await this.get(this.url, this.header).toPromise();
  }
  postNotes (data) {
    return this.post(this.url, data, this.header).toPromise();
  }
  putNotes (id: number, data) {
    return this.put(`${this.url}/${id}`, data, this.header).toPromise();
  }
  deleteNotes (id: number) {
    return this.delete(`${this.url}/${id}`, this.header).toPromise();
  }
}

