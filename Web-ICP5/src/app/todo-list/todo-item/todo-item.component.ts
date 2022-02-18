import { Component, OnInit } from '@angular/core';
import {  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
// type TodoItem = {
//   description: string;
//   done: boolean;
//
//
//
// };


export class TodoItemComponent implements OnInit {

  editable = false;
  @Input() item: TodoItem;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<TodoItem>();
  constructor() {
    this.item = new TodoItem();
    this.newItem = "" };
  editItem(description:string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
  ngOnInit(): void {
  }
    }


class TodoItem {
  description: string;
  done: boolean;

  constructor() {
    this.description = "test";
    this.done = false;
  }

}

  //@Output() remove = new EventEmitter<Item>();









