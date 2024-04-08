import { injectable } from "inversify";
import { ITask, Task } from "../entities/Task";

@injectable()
export class TaskUseCase {
  createTask(task: ITask): void {
    // TODO
  }

  getTasks(): Task[] {
    return [];
  }

  getTaskDetail(taskId: string): Task {
    // TODO
    return Task.create({ description: '', assignee: '', status: '' });
  }

  editTask(taskId:string, task: Partial<ITask>): void {
    // TODO
  }

  deleteTask(taskId: string): void {
    // TODO
  }
}