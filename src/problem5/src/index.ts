import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import morgan from "morgan";
import container from "./inversify.config"
import "./application/controllers/v1/TaskController";

const server = new InversifyExpressServer(container, null, { rootPath: "/api/" });

server.setConfig((app) => {
  app.use(express.json());
  app.use(morgan("combined"));
});

server.setErrorConfig((app) => {
  app.use((err: Record<string, unknown>, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    // Just quick return error for demo.
    // TODO : Need to define BaseController to handle error more efficiently & not direct return the message without control
    res.status(500).json(err.message ?? 'Internal server error!');
  });
});

server.build().listen(3100, () => {
  console.log("Server started on http://localhost:3100");
});