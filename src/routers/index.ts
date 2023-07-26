import express, { Response } from 'express';
import { clientController } from "../http/controllers/client";
const Routes = express();
Routes.get("/", (_, res: Response) => {
  res.status(200).send({
    data: "ok",
  });
});
Routes.post("/client/new", clientController.createClient);

export default Routes
