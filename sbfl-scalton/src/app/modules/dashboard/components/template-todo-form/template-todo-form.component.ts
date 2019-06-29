import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task/task.service';
import { TodoModel } from '../../models/todo.model';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.scss']
})
export class TemplateTodoFormComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  submitTemplateForm(input: HTMLInputElement) {
    const todo: TodoModel = new Todo({ title: input.value });
    // this.todoList.push(todo);
    this.taskService.insert(todo);
  }
}
