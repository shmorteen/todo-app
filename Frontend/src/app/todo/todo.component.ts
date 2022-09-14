import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todoArray: any[] = [];
  @Output() moreInfoData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
  
  chker(){
   console.log(this.todoArray)

  }
 
  moreInfo(index: number){
    this.chker();
    console.log(index);
    this.moreInfoData.emit({showToggler: false, todoIndex: index});
  }

}
