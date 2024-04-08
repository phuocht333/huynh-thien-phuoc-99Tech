import { inject } from "inversify";
import { Request, Response } from "express";
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { ITaskUseCase } from "../../useCases/TaskUseCase";
import { newTaskValidate } from "../middlewares/validators/taskValidator";
import { TYPES } from "../../../config/types";

@controller("/task-service/v1")
export class TaskController {
  constructor(@inject(TYPES.TaskUseCase) private taskUseCase: ITaskUseCase) { }

  @httpPost("/task", ...newTaskValidate)
  async createTask(_: Request, res: Response) {
    const tasks = this.taskUseCase.getTasks();
    return res.json(tasks);
  }

  @httpGet("/tasks")
  async getTasks(_: Request, res: Response) {
    console.log('getTasks');
    const tasks = this.taskUseCase.getTasks();
    return res.json(tasks);
  }

  @httpGet("/task/:id")
  async getTaskDetail(_: Request, res: Response) {
    const tasks = this.taskUseCase.getTasks();
    return res.json(tasks);
  }

  @httpPut("/task/:id")
  async editTask(_: Request, res: Response) {
    const tasks = this.taskUseCase.getTasks();
    return res.json(tasks);
  }

  @httpDelete("/task/:id")
  async deleteTask(_: Request, res: Response) {
    const tasks = this.taskUseCase.getTasks();
    return res.json(tasks);
  }
}