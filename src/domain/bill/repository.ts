import { IBill } from ".";

export interface IBillRepository {
  find: (filter: { [key: string]: any }) => Promise<IBill | any>;
  create: (data: IBill) => Promise<void>;
}
