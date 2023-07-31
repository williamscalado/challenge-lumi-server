import { IBill, IBillByClient } from ".";

export interface IBillRepository {
  find: (filter: { [key: string]: any }) => Promise<IBill | any>;
  findAlL: () => Promise<IBill[] | any[]>;
  findBillByClient: (
    year: string,
    numberClient: string
  ) => Promise<IBillByClient[] | any[]>;
  getStatistics: (yearFilter: string, MonthFilter: string) => Promise<any>;
  findUniqueYearByClient: () => Promise<string[] | any[]>;
  findUniqueByClient: () => Promise<number[] | any[]>;
  create: (data: IBill) => Promise<void>;
}
