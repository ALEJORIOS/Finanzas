import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  constructor(private http: HttpClient) {}

  submitMovement(mov: Movement) {
    // return this.http.post(`https://finances.hodweb.dev/insert`, mov);
    return this.http.post(`http://147.79.74.64:3220/insert`, mov);
  }

  retrieveRecord() {
    return this.http.get(`http://147.79.74.64:3220/record`);
  }

  downloadExcel() {
    return this.http.get(`http://147.79.74.64:3220/download`, { responseType: 'blob' });
  }
}

export interface Movement {
  date: string;
  concept: string;
  category: string;
  description: string;
  value: number;
}
