import { Request, Response } from "express";
import { z } from "zod";
import { formatErrorMessage } from "../../../helpers/error";
import { billDTO, billValidationDTO } from "./validation";

async function create(req: Request, res: Response) {
  try {
    // throw new ErrorException("teste");
    const requestBody: billDTO[] = req.body;
    // Now add this object into an array
    z.array(billValidationDTO).nonempty().parse(requestBody);
    //await billService.create(requestBody);

    res.status(200).json({
      sucesso: true,
    });
  } catch (error: Error | any) {
    res.status(400).json(formatErrorMessage(error));
  }
}

export const billController = {
  create,
};
