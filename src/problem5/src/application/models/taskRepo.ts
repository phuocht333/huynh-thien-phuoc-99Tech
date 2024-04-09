import { injectable } from "inversify";
import { ITask, TStatus } from "../entities/Task";
import { KnexSingleton } from "../../infrastructure/database/knexSingleton";
import { TASK_TABLE_NAME } from "../../config/const";

export interface ITaskRepo {
  createTask(task: ITask): Promise<void>;
  editTask(taskId: string, task: Partial<ITask>): Promise<void>;
  deleteTask(taskId: string): Promise<void>;
  getTasks(status?: TStatus): Promise<Pick<ITask, "id" | "status" | "assignee">[]>;
  getTaskDetail(taskId: string): Promise<Pick<ITask, 'description'>>;
}

@injectable()
export class TaskRepo implements ITaskRepo {
  private knexTaskInst = KnexSingleton.getInstance()<ITask>(TASK_TABLE_NAME);

  async createTask(task: ITask): Promise<void> {
    await this.knexTaskInst.insert(task);
  }

  async editTask(taskId: string, task: ITask): Promise<void> {
    await this.knexTaskInst.where({ id: taskId }).update(task);
  }

  async deleteTask(taskId: string): Promise<void> {
    await this.knexTaskInst.where({ id: taskId }).del();
  }

  async getTasks(status?: TStatus): Promise<Pick<ITask, "id" | "status" | "assignee">[]> {
    const getTasksQueryBuilder = this.knexTaskInst.select('id', 'status', 'assignee');
    if (status) {
      getTasksQueryBuilder.where('status', status);
    }

    const data = await getTasksQueryBuilder;
    return data;
  }

  async getTaskDetail(taskId: string): Promise<Pick<ITask, 'description'>> {
    const data = await this.knexTaskInst.select('description').where({ id: taskId });
    return data[0];
  }
}