import { Container } from "inversify";
import { TaskController } from "./application/controllers//v1/TaskController";
import { TaskUseCase } from "./application/useCases/TaskUseCase";

const container = new Container();
container.bind<TaskController>(TaskController).toSelf();
container.bind<TaskUseCase>(TaskUseCase).toSelf();

export default container;