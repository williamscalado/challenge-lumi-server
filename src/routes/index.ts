import express, { Response } from 'express';
const Routes = express();
Routes.get("/", (_, res: Response) => {
  res.status(200).send({
    data: "ok",
  });
});

export default Routes
