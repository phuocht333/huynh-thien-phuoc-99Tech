import { injectable } from "inversify";
import { ITask } from "../entities/Task";
import { KnexSingleton } from "../../infrastructure/database/knexSingleton";
import { TASK_TABLE_NAME } from "../../config/const";
const knexInst = KnexSingleton.getInstance();

export interface ITaskRepo {
  createTask(task: ITask): Promise<void>;
  editTask(taskId: string, task: Partial<ITask>): Promise<void>;
  deleteTask(taskId: string): Promise<void>;
  getTasks(): Promise<ITask[]>;
  getTaskDetail(taskId: string): Promise<Pick<ITask, 'description'>>;
}

@injectable()
export class TaskRepo implements ITaskRepo {

  async createTask(task: ITask): Promise<void> {
  }

  async editTask(taskId: string, task: ITask): Promise<void> {

  }

  async deleteTask(task: string): Promise<void> {

  }

  async getTasks(): Promise<ITask[]> {
    const data = knexInst<ITask>(TASK_TABLE_NAME).select('id', 'status', 'assignee');
    console.log(data);
    return [];
  }

  async getTaskDetail(taskId: string): Promise<Pick<ITask, 'description'>> {
    const data = knexInst<ITask>(TASK_TABLE_NAME).select('description').where('id', taskId);
    console.log(data)
    return { description: '' };
  }
}