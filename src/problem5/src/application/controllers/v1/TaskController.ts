import { inject } from "inversify";
import { Request, Response } from "express";
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { TaskUseCase } from "../../useCases/TaskUseCase";
import { newTaskValidate } from "../middlewares/validators/taskValidator";

@controller("/task-service/v1/")
export class TaskController {
  constructor(@inject(TaskUseCase) private taskUseCase: TaskUseCase) { }

  @httpPost("/task", ...newTaskValidate)
  async createTask(_: Request, res: Response) {
    const users = this.taskUseCase.getTasks();
    return res.json(users);
  }

  @httpGet("/tasks")
  async getTasks(_: Request, res: Response) {
    const users = this.taskUseCase.getTasks();
    return res.json(users);
  }

  @httpGet("/task/:id")
  async getTaskDetail(_: Request, res: Response) {
    const users = this.taskUseCase.getTasks();
    return res.json(users);
  }

  @httpPut("/task/:id")
  async editTask(_: Request, res: Response) {
    const users = this.taskUseCase.getTasks();
    return res.json(users);
  }

  @httpDelete("/task/:id")
  async deleteTask(_: Request, res: Response) {
    const users = this.taskUseCase.getTasks();
    return res.json(users);
  }
}