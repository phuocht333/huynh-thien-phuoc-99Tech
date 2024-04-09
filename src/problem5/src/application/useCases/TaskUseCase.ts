import { inject, injectable } from "inversify";
import { ITask, TStatus, Task } from "../entities/Task";
import { ITaskRepo } from "../models/taskRepo";
import { TYPES } from "../../config/types";
import { instanceToPlain } from "class-transformer";

export interface ITaskUseCase {
  createTask(task: ITask): Promise<void>;
  getTasks(status?: TStatus): Promise<ITask[]>;
  getTaskDetail(taskId: string): Promise<ITask>;
  editTask(taskId: string, task: Partial<ITask>): Promise<void>;
  deleteTask(taskId: string): Promise<void>;
}

@injectable()
export class TaskUseCase {
  constructor(@inject(TYPES.TaskRepo) private taskRepo: ITaskRepo) { }

  async getTasks(status: TStatus): Promise<Pick<ITask, "id" | "status" | "assignee">[]> {
    const tasks = await this.taskRepo.getTasks(status);
    return tasks;
  }

  async getTaskDetail(taskId: string): Promise<Pick<ITask, 'description'>> {
    const taskDes = await this.taskRepo.getTaskDetail(taskId);
    return taskDes;
  }

  async createTask(task: ITask): Promise<void> {
    const newTask = Task.create(task);
    const plainTask = instanceToPlain(newTask) as ITask;
    console.log('plainTask', plainTask); 

    await this.taskRepo.createTask(plainTask);
  }

  async editTask(taskId: string, task: Partial<ITask>): Promise<void> {
    // For simple, just edit as a plain object.
    // TODO - Regarding edit case: should retrieve & rebuild the Task entity state to ensure valid domain logic. 
    await this.taskRepo.editTask(taskId, task);
  }

  async deleteTask(taskId: string): Promise<void> {
    await this.taskRepo.deleteTask(taskId);
  }
}