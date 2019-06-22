import { Component, OnInit } from '@angular/core';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'learn to code', false, new Date()),
    new Todo(2, 'book the ticket', true, new Date()),
    new Todo(3, 'pay bills', true, new Date()),

  ];


  constructor() { }

  ngOnInit() {
  }

}
