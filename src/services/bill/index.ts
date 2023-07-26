import { getAllUniqueByField } from "../../helpers/util";
import { IBill, IBillService } from "../../types/bill";

async function create(dataBill: IBill | IBill[]) {
  if (Array.isArray(dataBill)) {
    //multiple
    const dataUniqueClient = getAllUniqueByField(dataBill, "client_number");
    // inserir os clientes
    // inserir as contas
  } else {
    // single
  }
  return;
}

export const billService: IBillService = {
  create,
};

/**
 *
 * extrair clientes únicos
 * verificar se os mesmo já existem e cadastrar *
 * quando for múltiplo retornar o erro em array
 */
