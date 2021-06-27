import { Injectable } from '@angular/core';
import { Cars } from './cars.model';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  formData: Cars = new Cars();
  readonly baseURL = 'https://localhost:44382/api/Car';

  postCars() {
    return this.http.post(this.baseURL, this.formData);
  }
}
