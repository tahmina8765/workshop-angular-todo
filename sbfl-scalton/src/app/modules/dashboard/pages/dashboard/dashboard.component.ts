import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoModel } from '../../models/todo.model';
import { TaskService } from '../../services/task/task.service';
import { MatCheckboxChange } from '@angular/material';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  pageTitle: string;
  paramsSubscription: Subscription;
  todoList: Array<TodoModel>;
  // [
  //   {
  //     title: 'Create an angular app',
  //     status: true
  //   },
  //   {
  //     title: 'Add style',
  //     status: false
  //   },
  //   {
  //     title: 'Create dashboard page',
  //     status: true
  //   },
  //   {
  //     title: 'Create todo list',
  //     status: false
  //   }
  // ];
  hide = false;

  constructor(private route: ActivatedRoute,
    private router: Router, public taskService: TaskService) { }

  ngOnInit() {
    let taskType = this.route.snapshot.params['type'];
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      taskType = params['type'];
      this.getTask(taskType);
    });
    // this.getTask(taskType);

  }

  getTask(taskType) {
    console.log(taskType);
    this.taskService.getAllTask(taskType).subscribe(
      data => {
        this.todoList = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  submitReactiveForm() {
    // const todo: TodoModel = new Todo({ title: input.value });
    // // this.todoList.push(todo);
    // this.taskService.insert(todo);
  }

  onStatusChange(task: TodoModel, event: MatCheckboxChange) {
    task.status = event.checked;
    this.taskService.update(task.id, task);
  }

  onImportantChange(task: TodoModel) {
    task.isImportant = !task.isImportant;
    this.taskService.update(task.id, task);
  }

  // focusFunction() {
  //   console.log('focus');
  //   this.hide = true;
  // }

  // focusOutFunction() {
  //   console.log('focus out');
  //   if (!this.title || this.title.length < 1) {
  //     this.hide = false;
  //   }
  // }

}
