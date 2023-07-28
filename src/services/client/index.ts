import { IClient, IClientService } from "../../domain/client";
import { IClientRepository } from "../../domain/client/repository";
import {
  IClientDto,
  clientValidation,
} from "../../http/controllers/client/validation";
import { prismaClientRepository } from "../../repositories/prisma/prismaClientRepository";
async function findByNumber(clientNumber: string) {
  return {} as IClient;
}
const clientRepository: IClientRepository = prismaClientRepository;

async function create(dataClient: IClientDto[]) {
  clientValidation.array().parse(dataClient);
  await clientRepository.create(dataClient);
  return;
}

export const clientService: IClientService = {
  findByNumber,
  create,
};
