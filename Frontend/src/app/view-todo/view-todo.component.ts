import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {
  @Input() todoInfo: any;
  @Input() showInfo: boolean = false;
  @Output() retur = new EventEmitter();
  @Output() editInfo = new EventEmitter();
  @Output() delInfo = new EventEmitter();

  i: number = 0
  editMode: boolean = false;
 
  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }

  return(){
    this.retur.emit({showToggler: true});
  }

  editTodo(){
    this.editMode= true;

  }
  deleteTodo(todoIndex: any){
    this.todoInfo.title = ''
    this.todoInfo.desc = ''
    this.todoInfo.date = ''
    this.todoInfo = {}
    this.editMode= false;
    console.log(this.todoInfo)
    this.delInfo.emit({todoIndex});
    this.retur.emit({showToggler: true});

  }

 saveTodo(todoIndex: any){
    this.editMode= false;
    let emittingData = {todoIndex, ...this.todoInfo}
    this.editInfo.emit({emittingData})
    console.log(this.editInfo)
  }
}
