import { IClientDto } from "../../http/controllers/client/validation";

export interface IClient {
  id?: string;
  client_number: string;
  name: string;
  address: string;
  createAt: number;
  updateAt: number;
}

export interface IClientService {
  findByNumber: (clientNumber: string) => Promise<IClient>;
  create: (dataClient: IClientDto) => Promise<void>;
}
export interface IClientRepository {
  find: (filter: any) => Promise<IClient | void>;
  create: (dataClient: IClient) => Promise<void>;
}
