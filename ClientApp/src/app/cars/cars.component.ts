import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cars } from '../shared/cars.model';
import { CarsService } from '../shared/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styles: [
  ]
})
export class CarsComponent implements OnInit {

  constructor(public service: CarsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Cars){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number){
    if(confirm('Are you sure to delete this record?'))
    {
      this.service.deleteCars(id)
      .subscribe(
        res => {
          this.service.refreshList();
          this.toastr.error("Deleted successfully", 'Cars Register');
        },
        err => {console.log(err)}
      )
    }
  }

}
