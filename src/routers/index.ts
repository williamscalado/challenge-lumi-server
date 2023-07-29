"use strict";
import express, { Request, Response } from "express";
import multer from "multer";

import { processPDFs } from "../helpers/pdfReader";
import { billController } from "../http/controllers/bill";
import { billDTO } from "../http/controllers/bill/validation";
import { clientController } from "../http/controllers/client";
import { billService } from "../services/bill";

const upload = multer();
const uploadConfig = upload.fields([{ name: "pdf", maxCount: 12 }]);

const Routes = express();
Routes.get("/", (_, res: Response) => {
  res.status(200).send({
    data: "ok",
  });
});
Routes.post("/client/new", clientController.createClient);
Routes.post("/bill/new", billController.create);

Routes.post(
  "/pdf/reader",
  uploadConfig,
  async (req: Request, res: Response) => {
    const { pdf }: any = req.files;
    const resultPdfs = await processPDFs(pdf);
    const result = await billService.create(resultPdfs as billDTO[]);
    console.log(result);
    res.status(200).json(result);
  }
);

export default Routes;
