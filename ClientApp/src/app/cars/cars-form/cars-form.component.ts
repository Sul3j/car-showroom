import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Cars } from 'src/app/shared/cars.model';
import { CarsService } from 'src/app/shared/cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styles: [
  ]
})
export class CarsFormComponent implements OnInit {

  constructor(public service: CarsService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(this.service.formData.carId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postCars().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submittes successfully', 'Car Register');
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm){
    this.service.putCars().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Car Register');
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new Cars();
  }

}
