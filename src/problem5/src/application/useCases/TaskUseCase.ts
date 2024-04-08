import { inject, injectable } from "inversify";
import { ITask, Task } from "../entities/Task";
import { ITaskRepo } from "../models/taskRepo";
import { TYPES } from "../../config/types";
import { instanceToPlain, plainToInstance } from "class-transformer";

export interface ITaskUseCase {
  createTask(task: ITask): Promise<void>;
  getTasks(): Promise<ITask[]>;
  getTaskDetail(taskId: string): Promise<ITask>;
  ditTask(taskId: string, task: Partial<ITask>): Promise<void>;
  deleteTask(taskId: string): Promise<void>;
}

@injectable()
export class TaskUseCase {
  constructor(@inject(TYPES.TaskRepo) private taskRepo: ITaskRepo) { }

  async getTasks(): Promise<ITask[]> {
    const tasks = await this.taskRepo.getTasks();
    return tasks;
  }

  async getTaskDetail(taskId: string): Promise<Promise<Pick<ITask, 'description'>> > {
    const taskDes = await this.taskRepo.getTaskDetail(taskId);
    return taskDes;
  }

  async createTask(task: ITask): Promise<void> {
    const newTask = Task.create(task);
    const plainTask = instanceToPlain(newTask) as ITask;
    console.log(plainTask);
    await this.taskRepo.createTask(plainTask);
  }

  async editTask(taskId: string, task: Partial<ITask>): Promise<void> {
    // Edit case: should retrieve the Task & rebuild the Task entity state to ensure valid domain logic. 
    // But for simple, just edit as a plain object.
    await this.taskRepo.editTask(taskId, task);
  }

  async deleteTask(taskId: string): Promise<void> {
    await this.taskRepo.deleteTask(taskId);
  }
}