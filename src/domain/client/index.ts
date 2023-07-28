import { IClientDto } from "../../http/controllers/client/validation";

export interface IClient {
  id?: number | undefined;
  client_number: string;
  name: string;
  address: string;
  createAt?: Date | string;
  updateAt?: Date | string;
}

export interface IClientService {
  findByNumber: (clientNumber: string) => Promise<IClient>;
  create: (dataClient: IClientDto[]) => Promise<any>;
}
