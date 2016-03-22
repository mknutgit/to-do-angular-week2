///* this is the Model///
export class Task {
  public done: boolean = false;
  public priority: string = "none";
  constructor(public description: string, public id: number) {

  }
}
