"use strict";
import express, { Response } from "express";
import multer from "multer";

import { billController } from "../http/controllers/bill";
import { clientController } from "../http/controllers/client";

const upload = multer();
const uploadConfig = upload.fields([{ name: "pdf", maxCount: 12 }]);

const Routes = express();
Routes.get("/", (_, res: Response) =>
  res.status(200).send({
    data: "ok",
  })
);

Routes.post("/client/new", clientController.createClient);
Routes.get("/bill", billController.findAll);
Routes.get(
  "/bill/client/:year?/:numberClient?",
  billController.findBillByClient
);
Routes.get("/bill/metadata", billController.findUniqueYearByClient);
Routes.get("/bill/statistics/:year?/:month?", billController.getStatistics);
Routes.post("/bill/new", billController.create);
Routes.post("/pdf/reader", uploadConfig, billController.processUpload);


export default Routes;
