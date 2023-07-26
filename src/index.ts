import bodyParser from "body-parser";
import timeout from "connect-timeout";
import cors from "cors";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import Routes from "./routers";

dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(timeout("60s"));
app.use(haltOnTimedOut);
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(
  bodyParser.json({
    limit: "5mb",
  })
);
app.use(Routes);
app.use(
  (error: Error, req: Request, res: Response, next: NextFunction): any => {
    const errorMessage = {
      error: "ServerError",
      message: error.message,
    };
    res.status(500).json(errorMessage);
  }
);
app.use("/", (_, res: Response) => {
  res.status(404).json({
    message: "Page not found!",
  });
});

function haltOnTimedOut(req: Request, res: Response, next: NextFunction) {
  if (!req.timedout) next();
}

export const ServerConfig = {
  app,
  port,
};
