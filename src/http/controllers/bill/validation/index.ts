import { z } from "zod";

const billValidationDTO = z.object({
  id_client: z.string().nonempty(),
  month_ref: z.string().nonempty(),
  data: z.string().nonempty(),
  energy_unit: z.string().nonempty(),
  energy_price: z.string().nonempty(),
  energy_amount: z.string().nonempty(),
  energy_send_unit: z.string().nonempty(),
  energy_send_price: z.string().nonempty(),
  energy_send_amount: z.string().nonempty(),
  contribution_lighting: z.string().nonempty(),
  amount: z.string().nonempty(),
});

export type billDTO = z.infer<typeof billValidationDTO>;
