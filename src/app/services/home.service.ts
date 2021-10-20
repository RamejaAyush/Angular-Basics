import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  developerName: string = 'Harshitha & ';
  age: number = 21;
}
