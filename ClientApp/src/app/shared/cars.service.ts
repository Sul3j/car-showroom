import { Injectable } from '@angular/core';
import { Cars } from './cars.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  formData: Cars = new Cars();
}
