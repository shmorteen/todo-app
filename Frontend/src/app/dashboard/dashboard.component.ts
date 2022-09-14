import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    motherTodoObject: any = {};
    todos: any[] =  [];
    showTodo: boolean = true;
    todoInfo:  any = {}
  
    constructor(){
    }
  
    ngOnInit(){
      this.getStoredTodos();
      this.showTodo = true
      
    }
  
    getTodo(todoObject: any){
      this.motherTodoObject = todoObject;
      this.todos.push(this.motherTodoObject);
      localStorage.setItem('todos', JSON.stringify(this.todos));
      console.log(this.todos)
    }
  
    getInfoData(infoData: any){
      const {showToggler, todoIndex} = infoData; //destructuring an object
      console.log(infoData)
      
      this.showTodo = infoData.showToggler;
      console.log(this.todos[todoIndex]);
      console.log(this.todos[todoIndex].title)
      if (this.todos[todoIndex].title == '' && this.todos[todoIndex].desc == '' && this.todos[todoIndex].date == ''){
        let  i = todoIndex
        this.todos.splice(i,0)
        console.log(this.todos)
      }
      this.todoInfo = this.todos[todoIndex];
      this.todoInfo['todoIndex'] = todoIndex;
    }

    getStoredTodos(){
      let localTodos = JSON.parse(String(localStorage.getItem('todos')));
      this.todos = localTodos ? localTodos : this.todos;
      console.log(this.todos)
      this.showTodo = false;
    }

    getEditData(data: any){
      this.todos[data.todoIndex] = {
        title: data.title,
        desc: data.desc,
        date: data.date
      };
      localStorage.setItem('todos', JSON.stringify(this.todos));
      this.getStoredTodos;
    }

}


