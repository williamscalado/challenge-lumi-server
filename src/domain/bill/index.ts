import { billDTO } from "../../http/controllers/bill/validation";
import { IClient } from "../client";

export interface IBill extends Partial<Omit<IClient, "client_number">> {
  id?: number;
  name?: string;
  address?: string;
  client_number: number;
  expiration_date: string;
  reference: string;
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
  create: (dataBill: billDTO[]) => Promise<void>;
}
