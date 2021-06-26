import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarsFormComponent } from './Cars/cars-form/cars-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
