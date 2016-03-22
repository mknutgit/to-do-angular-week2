import { Component } from 'angular2/core';
import { Task } from './task.model';

///* This Component displays one and only one task.  It is a child component of "TaskListComponent" ///
@Component({
    selector: 'task-display',
    inputs: ['task'],
  template: `
  <div>
    <input *ngIf="task.done" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="!task.done" type="checkbox" (click)="toggleDone(true)"/>    <label>{{ task.description }}</label>
    </div>
  `
})

///* Controller ///
export class TaskComponent {
  public task: Task; ///* Stores the input from the Component ///
  toggleDone(setState: boolean){
    this.task.done = setState;
  }
}
