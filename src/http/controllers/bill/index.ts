import { Request, Response } from "express";
import { z } from "zod";
import { formatErrorMessage } from "../../../helpers/error";
import { billService } from "../../../services/bill";
import { billDTO, billValidationDTO } from "./validation";

import { processPDFs } from "../../../helpers/pdfReader";

const processUpload = async (req: Request, res: Response) => {
  try {
    const { pdf }: any = req.files;
    const resultPdfs = await processPDFs(pdf);
    const result = await billService.create(resultPdfs as billDTO[]);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(formatErrorMessage(error));
  }
};

async function create(req: Request, res: Response) {
  try {
    const requestBody: billDTO[] = req.body;
    z.array(billValidationDTO).nonempty().parse(requestBody);
    await billService.create(requestBody);
    res.status(200).json({
      sucesso: true,
    });
  } catch (error: Error | any) {
    res.status(400).json(formatErrorMessage(error));
  }
}
async function findAll(req: Request, res: Response) {
  try {
    const resultBills = await billService.findAll();
    res.status(200).send(resultBills);
  } catch (error: Error | any) {
    res.status(400).json(formatErrorMessage(error));
  }
}
async function findUniqueYearByClient(req: Request, res: Response) {
  try {
    const resultBills = await billService.findUniqueYearByClient();
    res.status(200).send(resultBills);
  } catch (error: Error | any) {
    res.status(400).json(formatErrorMessage(error));
  }
}
async function findBillByClient(req: Request, res: Response) {
  try {
    const { year, numberClient } = req.params;

    if (year)
      z.string().min(4, "Ano inválido").max(4, "Ano inválido").parse(year);
    if (numberClient) z.string().min(4, "Ano inválido").parse(year);

    const resultBills = await billService.findBillByClient(year, numberClient);
    res.status(200).send(resultBills);
  } catch (error: Error | any) {
    res.status(400).json(formatErrorMessage(error));
  }
}
async function getStatistics(req: Request, res: Response) {
  try {
    const { year, month } = req.params;

    if (year)
      z.string().min(4, "Ano inválido").max(4, "Ano inválido").parse(year);

    const resultBills = await billService.getStatistics(year, month);
    res.status(200).send(resultBills);
  } catch (error: Error | any) {
    res.status(400).json(formatErrorMessage(error));
  }
}

export const billController = {
  create,
  processUpload,
  findAll,
  findBillByClient,
  findUniqueYearByClient,
  getStatistics,
};
