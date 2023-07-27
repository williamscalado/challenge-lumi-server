import { getAllUniqueByField } from "../../helpers/util";
import { IBill, IBillService } from "../../types/bill";

async function create(dataBill: IBill | IBill[]) {
  // insert unique clients in database
  const dataUniqueClient = getAllUniqueByField(dataBill, "client_number");

  // insert bill in database
  if (Array.isArray(dataBill)) {
    //multiple
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
