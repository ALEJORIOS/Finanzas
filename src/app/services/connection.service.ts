import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  constructor(private http: HttpClient) {}

  submitMovement(mov: Movement) {
    return this.http.post(`https://finances.hodweb.dev/insert`, mov);
  }
}

export interface Movement {
  date: string;
  concept: string;
  category: string;
  description: string;
  value: number;
}
