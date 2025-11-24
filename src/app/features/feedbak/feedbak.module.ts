import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Correct import

import { FeedbakRoutingModule } from './feedbak-routing.module';
import { FeedbakComponent } from './feedbak.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    FeedbakComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FeedbakRoutingModule,
    FormsModule // Add this line
  ]
})
export class FeedbakModule { }