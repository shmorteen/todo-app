import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';


const routes:Routes = [
 {
   path:'',
  component:DashboardComponent
 },
{
  path:'archive',
  component:ArchiveComponent
},
{
  path:'todo',
  component:TodoComponent
},
{
  path:'view-todo',
  component:ViewTodoComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
