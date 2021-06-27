import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cars } from 'src/app/shared/cars.model';
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

  onSubmit(form: NgForm){
    this.service.postCars().subscribe(
      res => {
        this.resetForm(form);
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new Cars();
  }

}
