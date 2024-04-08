import "reflect-metadata";
import { NextFunction, Request, Response } from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import morgan from "morgan";
import container from "./inversify.config"
import "./application/controllers/v1/TaskController";

const server = new InversifyExpressServer(container, null, { rootPath: "/api/" });

server.setConfig((app) => {
  app.use(morgan("combined"));
});

server.setErrorConfig((app) => {
  app.use((err: Record<string, unknown>, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json('oh noes!');
  });
});

server.build().listen(3100, () => {
  console.log("Server started on http://localhost:3100");
});