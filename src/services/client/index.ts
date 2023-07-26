import { clientRepository } from "../../repositories/client";
import { IClient, IClientDto, IClientService } from "../../types/client";

async function findByNumber(clientNumber: string) {
  return {} as IClient;
}

async function create(dataClient: IClientDto) {
  const newDataClient: IClient = {
    ...dataClient,
    createAt: new Date().getTime(),
    updateAt: new Date().getTime(),
  };
  await clientRepository.create(newDataClient);
  return;
}

export const clientService: IClientService = {
  findByNumber,
  create,
};
