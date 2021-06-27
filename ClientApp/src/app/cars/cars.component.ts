import { Component, OnInit } from '@angular/core';
import { Cars } from '../shared/cars.model';
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

  populateForm(selectedRecord: Cars){
    this.service.formData = selectedRecord;
  }

}
