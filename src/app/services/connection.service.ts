import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  constructor(private http: HttpClient) {}

  submitMovement(mov: Movement) {
    // return this.http.post(`https://finances.hodweb.dev/insert`, mov);
    return this.http.post(`https://finances.hodweb.dev/insert`, mov);
  }

  retrieveRecord() {
    return this.http.get(`https://finances.hodweb.dev/record`);
  }

  downloadExcel() {
    return this.http.get(`https://finances.hodweb.dev/download`, { responseType: 'blob' });
  }
}

export interface Movement {
  date: string;
  concept: string;
  category: string;
  description: string;
  value: number;
}
