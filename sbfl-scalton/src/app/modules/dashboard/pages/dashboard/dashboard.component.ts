import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../../models/todo.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: string;
  todoList: TodoModel[] = [
    {
      title: 'Create an angular app',
      status: true
    },
    {
      title: 'Add style',
      status: false
    },
    {
      title: 'Create dashboard page',
      status: true
    },
    {
      title: 'Create todo list',
      status: false
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  submitForm(){
    let todo: TodoModel = {title: this.title, status: false};
    this.todoList.push(todo);
  }
}
