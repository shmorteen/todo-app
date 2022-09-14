import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoObject: any = {
    title: '',
    desc: '',
    date: ''
  };
  @Output() todo = new EventEmitter();

  
  constructor() { }

  ngOnInit(): void {
  }

  
  createTodo(){
    let newTodo = { ...this.todoObject };
    this.todo.emit(newTodo);
    this.todoObject.title = '';
    this.todoObject.desc = '';
    this.todoObject.date = '';
  }


}
