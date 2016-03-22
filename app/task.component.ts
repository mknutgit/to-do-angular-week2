import { Component } from 'angular2/core';
import { Task } from './task.model';

///* This Component displays one and only one task.  It is a child component of "TaskListComponent" ///
@Component({
    selector: 'task-display',
    inputs: ['task'],
  template: `
    <h3>{{ task.description }}</h3>
  `
})

///* Controller ///
export class TaskComponent {
  public task: Task; ///* Stores the input from the Component ///
}
