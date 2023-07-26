import { billDTO } from "../../http/controllers/bill/validation";
import { IClient } from "../client";

export interface IBill extends IClient {
  id: string;
  client_number: string;
  month_ref: string;
  data: string;
  energy_unit: string;
  energy_price: number;
  energy_amount: number;
  energy_send_unit: number;
  energy_send_price: number;
  energy_send_amount: number;
  contribution_lighting: string;
  amount: number;
  create_at: string;
  update_at: string;
}

export interface IBillService {
  create: (dataBill: IBill | IBill[]) => Promise<void>;
}
export interface IBillRepository {
  find: (filter: any) => Promise<IBill | void>;
  create: (data: billDTO) => Promise<void>;
}
