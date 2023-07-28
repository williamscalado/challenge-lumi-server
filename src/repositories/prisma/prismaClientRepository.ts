import { prisma } from "../../adapters/prisma";
import { IClientRepository } from "../../domain/client/repository";
import { IClientDto } from "../../http/controllers/client/validation";

interface IFilters {
  filter: string;
  valeu: string;
}

async function find(filter: IFilters) {}
async function create(dataClient: IClientDto[]) {
  return await prisma.client.createMany({
    data: dataClient,
    skipDuplicates: true,
  });
}

export const prismaClientRepository: IClientRepository = {
  create,
  find,
};
