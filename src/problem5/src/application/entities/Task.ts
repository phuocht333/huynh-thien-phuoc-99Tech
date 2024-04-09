import { Exclude, Expose, Transform } from "class-transformer";
import { AggregateRoot } from "../../core/AggregateRoot";

export const statusList = ["todo", "doing", "done"] as const;
export type TStatus = typeof statusList[number];

export interface ITask {
  id?: string;
  status: TStatus;
  description: string;
  assignee: string;
}

@Exclude()
export class Task extends AggregateRoot<ITask>{

  @Expose()
  get id(): string {
    return this._id
  }

  @Expose()
  get status(): TStatus {
    return this._props.status;
  }

  @Expose()
  get description(): string {
    return this._props.description;
  }

  @Expose()
  get assignee(): string {
    return this._props.assignee;
  }

  private constructor(props: ITask) {
    super(props);
  }

  public static create(props: ITask): Task {
    // TODO: Can do some checking here to ensure the valid state before creating Task entity via constructor.
    if (!props?.status) {
      props.status = "todo";
    }

    if (!statusList.includes(props.status)) {
      throw new Error(`Invalid status: ${props.status}`);
    }

    const task = new Task(props);
    return task;
  }
}