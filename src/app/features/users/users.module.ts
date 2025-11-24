import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ReactiveFormsModule
  ]
})
export class UsersModule { }
