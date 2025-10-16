import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  constructor(private http: HttpClient) {}

  submitMovement(mov: Movement) {
    return this.http.post(`http://147.79.74.64:3220/insert`, mov);
  }
}

export interface Movement {
  date: string;
  concept: string;
  category: string;
  description: string;
  value: number;
}
