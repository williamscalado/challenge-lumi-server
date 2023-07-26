import { Request, Response } from "express";
import { z } from "zod";
import { billService } from "../../../services/bill";
import { IBill } from "../../../types/bill";

async function create(req: Request, res: Response) {
  try {
    const requestBody: IBill | IBill[] = req.body;
    await billService.create(requestBody);

    res.status(200).json({
      sucesso: true,
    });
  } catch (error: Error | any) {
    res.status(500).json({
      message: error instanceof z.ZodError ? error.issues : error.message,
    });
  }
}

export const billController = {
  create,
};
