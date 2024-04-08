import { Container } from "inversify";
import { TYPE, interfaces } from "inversify-express-utils";
import { TaskController } from "./application/controllers//v1/TaskController";
import { TaskUseCase } from "./application/useCases/TaskUseCase";
import { TaskRepo } from "./application/models/taskRepo";
import { TYPES } from "./config/types";

const container = new Container();
container.bind<interfaces.Controller>(TYPE.Controller).to(TaskController).whenTargetNamed(TYPES.TaskController); 
container.bind<TaskUseCase>(TYPES.TaskUseCase).to(TaskUseCase);
container.bind<TaskRepo>(TYPES.TaskRepo).to(TaskRepo);

export default container;