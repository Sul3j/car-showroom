import { Component, OnInit } from '@angular/core';
import { CarsService } from '../shared/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styles: [
  ]
})
export class CarsComponent implements OnInit {

  constructor(public service: CarsService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
