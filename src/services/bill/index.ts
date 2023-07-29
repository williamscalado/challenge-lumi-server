import { IBill, IBillService } from "../../domain/bill";
import { IBillRepository } from "../../domain/bill/repository";
import { getAllUniqueByField } from "../../helpers/util";
import { billDTO } from "../../http/controllers/bill/validation";
import { prismaBillRepository } from "../../repositories/prisma/prismaBillRepository";
import { clientService } from "../client";

const billRepository: IBillRepository = prismaBillRepository;




async function create(dataBill: billDTO[] | billDTO) {
  if (!Array.isArray(dataBill)) dataBill = [dataBill];
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

  const promises = dataBill.map(async (item: Partial<IBill | billDTO>) => {
    const { reference, client_number } = item;
    let result: { [key: string]: boolean };
    delete item.name;
    delete item.address;

    const [year, month] = String(reference).split("-").slice(0, 2);
    const formattedDate = `${month}/${year}`;

    const findBillByRefClient = await billRepository.find({
      reference,
      client_number,
    });

    if (findBillByRefClient.length) {
      result = { [String(formattedDate)]: false };
      return result;
    }

    await billRepository.create(item as any);
    return { [String(formattedDate)]: true };
  });

  return await Promise.all(promises);
}

export const billService: IBillService = {
  create,
};

