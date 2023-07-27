import { Request, Response } from "express";
import { formatErrorMessage } from "../../../helpers/error";
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
    res.status(400).json(formatErrorMessage(error));
  }
}

export const clientController = {
  createClient,
};
