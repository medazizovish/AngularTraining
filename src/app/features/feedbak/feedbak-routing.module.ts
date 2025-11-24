import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbakComponent } from './feedbak.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [{ path: '', component: FeedbakComponent ,
  children:
  [
    {
      path:'event/:id' , component:FormComponent
    }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbakRoutingModule { }
