import { IClient } from ".";
import { IClientDto } from "../../http/controllers/client/validation";

export interface IClientRepository {
  find: (filter: any) => Promise<IClient | void>;
  create: (dataClient: IClientDto[]) => Promise<any>;
}
