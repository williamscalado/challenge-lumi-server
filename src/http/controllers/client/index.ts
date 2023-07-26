import { Request, Response } from "express";
import { z } from "zod";
import { clientService } from "../../../services/client";
import { IClientDto, clientValidation } from "./validation";

async function createClient(req: Request, res: Response) {
  try {
    const requestBody: IClientDto = req.body;
    clientValidation.parse(requestBody);
    await clientService.create(requestBody);
    res.status(200).json({
      sucesso: true,
    });
  } catch (error: Error | any) {
    res.status(500).json({
      message: error instanceof z.ZodError ? error.issues : error.message,
    });
  }
}

export const clientController = {
  createClient,
};
