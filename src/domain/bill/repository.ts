import { IBill } from ".";

export interface IBillRepository {
  find: (filter: any) => Promise<IBill | void>;
  create: (data: IBill[]) => Promise<void>;
}
