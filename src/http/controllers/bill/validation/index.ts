import { z } from "zod";

export const billValidationDTO = z.object({
  client_number: z
    .string({
      required_error: "Número do cliente é obrigatório",
    })
    .nonempty(),
  name: z
    .string({
      required_error: "Nome do cliente é obrigatório",
    })
    .nonempty(),
  address: z
    .string({
      required_error: "Endereço do cliente é obrigatório",
    })
    .nonempty(),
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
