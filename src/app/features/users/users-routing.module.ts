import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [{ path: '', component: UsersComponent ,
  children :  [{path :'user' , component : SignUpComponent}]
                  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }


