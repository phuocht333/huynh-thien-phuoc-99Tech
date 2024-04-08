import { Expose } from "class-transformer";
import { AggregateRoot } from "../../core/AggregateRoot";

type status = "todo" | "doing" | "done";
export interface ITask {
  id: string;
  status: status;
  description: string;
  assignee: string;
}

export class Task extends AggregateRoot<ITask>{
  @Expose({ name: 'status' })
  get status(): string {
    return this.props.status;
  }

  @Expose({ name: 'description' })
  get description(): string {
    return this.props.description;
  }

  @Expose({ name: 'assignee' })
  get assignee(): string {
    return this.props.assignee;
  }

  private constructor(props: ITask) {
    super(props);
  }

  public static create(props: ITask): Task {
    // TODO: Can do some checking here to ensure the valid state before creating Task entity via constructor.
    const task = new Task(props);
    return task;
  }
}