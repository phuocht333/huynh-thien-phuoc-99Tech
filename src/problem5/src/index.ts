import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import morgan from "morgan";
import container from "./inversify.config"


const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(morgan("combined"));
})

server.build().listen(3100, () => {
  console.log("Server started on http://localhost:3100");
});