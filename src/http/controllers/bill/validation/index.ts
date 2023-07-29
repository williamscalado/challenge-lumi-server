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
  expiration_date: z.string().nonempty(),
  reference: z.string().nonempty(),
  energy_unit: z.number(),
  energy_price: z.number(),
  energy_amount: z.number(),
  energy_send_unit: z.number(),
  energy_send_price: z.number(),
  energy_send_amount: z.number(),
  contribution_lighting: z.number(),
  amount: z.number(),
});

export type billDTO = z.infer<typeof billValidationDTO>;
