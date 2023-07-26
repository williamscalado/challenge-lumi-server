import bodyParser from "body-parser";
import timeout from "connect-timeout";
import cors from 'cors';
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import Routes from "./routes";

dotenv.config()
const port = process.env.PORT;
const app = express()
app.use(cors());
app.use(timeout('60s'))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({
    limit:"5mb"
  })
);
app.use(Routes)
app.use((error: Error, req: Request, res: Response, next: NextFunction) : any => {
  const errorMessage = {
    error: "ServerError",
    message: error.message,
  };
  res.status(500).json(errorMessage);
});
app.use('/',(_, res:Response)=>{
  res.status(404).json({
    message: "Page not found!"
  })
})
app.listen(port, ()=>{
  console.log(`[SERVER]: running in port ${port}`)
});