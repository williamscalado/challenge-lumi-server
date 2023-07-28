import { IBill, IBillService } from "../../domain/bill";
import { IBillRepository } from "../../domain/bill/repository";
import { getAllUniqueByField } from "../../helpers/util";
import { billDTO } from "../../http/controllers/bill/validation";
import { prismaBillRepository } from "../../repositories/prisma/prismaBillRepository";
import { clientService } from "../client";

const billRepository: IBillRepository = prismaBillRepository;

async function create(dataBill: billDTO[]) {
  // insert unique clients in database
  const dataUniqueClient = getAllUniqueByField(dataBill, "client_number").map(
    (item: any) => {
      return {
        client_number: Number(item.client_number),
        name: item.name,
        address: item.address,
      };
    }
  );
  await clientService.create(dataUniqueClient);
  const newDataBill = [...dataBill].map((item: Partial<IBill | billDTO>) => {
    delete item.name;
    delete item.address;
    return item;
  }) as IBill[];
  await billRepository.create(newDataBill);
  console.log(newDataBill);

  console.log(dataUniqueClient);

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
