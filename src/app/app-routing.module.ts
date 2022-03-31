import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './user/list-users/list-users.component';

const routes: Routes = [
  
  {path:'users',
  children:[
    {path:'',component:ListUsersComponent},
    {path:'list',component:ListUsersComponent},
    {path:'delete/:id',component:DeleteUserComponent},
    {path:'edit/:id',component:EditUserComponent},
    {path:'view/:id',component:ViewUserComponent},
    {path:'create',component:AddUserComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
