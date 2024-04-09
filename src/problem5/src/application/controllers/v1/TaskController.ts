import { inject } from "inversify";
import express, { Request, Response } from "express";
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { ITaskUseCase } from "../../useCases/TaskUseCase";
import { validateGetTasks, validateCreateTask } from "../middlewares/validators/taskValidator";
import { TYPES } from "../../../config/types";
import { TStatus } from "../../entities/Task";

// TODO: Extend from BaseController to use common implementation/errors
@controller("/task-service/v1")
export class TaskController {
  constructor(@inject(TYPES.TaskUseCase) private taskUseCase: ITaskUseCase) { }

  @httpPost("/task", validateCreateTask)
  async createTask(req: Request, res: Response) {
    const body = req.body;
    const tasks = await this.taskUseCase.createTask(body);
    return res.json(tasks);
  }

  @httpGet("/tasks", validateGetTasks)
  async getTasks(req: Request, res: Response) {
    const status = req.query.status as TStatus | undefined;
    const tasks = await this.taskUseCase.getTasks(status);
    return res.json(tasks);
  }

  @httpGet("/task/:id")
  async getTaskDetail(req: Request, res: Response) {
    const taskId = req.params.id;
    const tasks = await this.taskUseCase.getTaskDetail(taskId);
    return res.json(tasks);
  }

  @httpPut("/task/:id")
  async editTask(req: Request, res: Response) {
    const taskId = req.params.id;
    const body = req.body;
    const tasks = await this.taskUseCase.editTask(taskId, body);
    return res.json(tasks);
  }

  @httpDelete("/task/:id")
  async deleteTask(req: Request, res: Response) {
    const taskId = req.params.id;
    const tasks = await this.taskUseCase.deleteTask(taskId);
    return res.json(tasks);
  }
}