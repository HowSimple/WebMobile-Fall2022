import { Component, OnInit } from '@angular/core';
import {TodoItemComponent} from "./todo-item/todo-item.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoList: TodoItemComponent[] =[];


  constructor() { }

  addNewTodo(){
    this.todoList.push(new TodoItemComponent())
  }

  ngOnInit(): void {
  }

}
