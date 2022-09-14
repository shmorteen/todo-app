import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  todos: any[] = [
    {
        message: 'I want to take a class',
        date: '01-11-2021',
        time: '08:00 PM',
        deleted: false
    },
    {
        message: 'I want to watch a film',
        date: '01-11-2021',
        time: '11:00 PM',
        deleted: false
    },
    {
        message: 'Gym class',
        date: '02-11-2021',
        time: '06:30 AM',
        deleted: false
    },
    {
        message: 'I want to go clubbing',
        date: '03-11-2021',
        time: '09:00 PM',
        deleted: false
    }
];

showContent: boolean = false;
content: string = 'Everything about me is good';

constructor(){
    
}

ngOnInit(): void {
    //this.todos.map(todo => console.log(todo));

    if(this.showContent){
        console.log(this.content);
    }
}

deleteTodo(index: number){
    this.todos[index].deleted = true;

    console.log(this.todos);
}

}