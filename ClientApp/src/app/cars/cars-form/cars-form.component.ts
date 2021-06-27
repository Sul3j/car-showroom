import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/shared/cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styles: [
  ]
})
export class CarsFormComponent implements OnInit {

  constructor(public service: CarsService) { }

  ngOnInit(): void {
  }

}
