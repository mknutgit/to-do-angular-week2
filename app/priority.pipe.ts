import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe ({
  name: "priority",
  // pure: false
})
export class PriorityPipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredPriorityState = args[0];
    if(desiredPriorityState === "High") {
      return input.filter((task) => {
        return task.priority;
      });
    } else if (desiredPriorityState === "Medium") {
      return input.filter((task) => {
        return task.priority;
      });
    } else {
      return input;
    }
  }
}
