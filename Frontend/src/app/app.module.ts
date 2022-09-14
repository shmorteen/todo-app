import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArchiveComponent } from './archive/archive.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { TodoComponent } from './todo/todo.component';

import { HttpService } from './utility/http.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { HttpErrorInterceptor } from './utility/HttpErrorInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ArchiveComponent,
    ViewTodoComponent,
    TodoComponent,
    AddTodoComponent


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    HttpService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpErrorInterceptor,
    //   multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
