import { z } from "zod";

export const clientValidation = z.object({
  client_number: z.number({
    required_error: "Número do cliente é obrigatório",
  }),
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
});

export type IClientDto = z.infer<typeof clientValidation>;
