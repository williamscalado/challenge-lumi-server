export interface IBill {
  id: string;
  id_client: string;
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
