import { Injectable } from '@angular/core';
import { Cars } from './cars.model';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44382/api/Car';
  formData: Cars = new Cars();
  list: Cars[];

  postCars() {
    return this.http.post(this.baseURL, this.formData);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Cars[]);
  }
}
