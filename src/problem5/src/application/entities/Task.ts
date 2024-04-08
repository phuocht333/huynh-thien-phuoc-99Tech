import { AggregateRoot } from "../../core/AggregateRoot";

export interface ITask { 
  status: string;
  description: string;
  assignee: string;
}

export class Task extends AggregateRoot<ITask>{
  private constructor(props: ITask, id?: string) {
    super(props, id);
  }

  public static create(props: ITask): Task {
    // TODO: Can do some checking here before actual create Task entity via constructor.
    const task = new Task(props);
    return task;
  }
}