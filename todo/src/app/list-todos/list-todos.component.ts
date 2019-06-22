import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

todos = [

  {id: 1, description: 'learn to code'},
  {id: 2, description: 'book the ticket'},
  {id: 3, description: 'visit home'}
];


  constructor() { }

  ngOnInit() {
  }

}
