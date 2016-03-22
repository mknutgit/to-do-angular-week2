import { Component, EventEmitter } from 'angular2/core';

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

///* This component controls the selection, or event handlers, for a task.  This is a child component of AppComponent ///
@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  directives: [TaskComponent],
  template: `
  <task-display *ngFor="#currentTask of taskList"
    (click)="taskClicked(currentTask)"
    [class.selected]="currentTask === selectedTask"
    [task]="currentTask">
  </task-display>
  `
})

///* Controller ///
export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    console.log(clickedTask + "child");
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
}

///* Root Component ///
@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
    <div class="container">
      <h1>To-Do List</h1>
      <task-list
        [taskList]="tasks"
        (onTaskSelect)="taskWasSelected($event)">
      </task-list>
    <div>
  `
})

///* Controller ///
export class AppComponent {
  public tasks: Task[];
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("LearnKung Fu.", 1),
      new Task("Rewatch all the Lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log(clickedTask + "parent");
  }
}

///* this is the Model///
export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {

  }
}
