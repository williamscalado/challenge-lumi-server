import { prisma } from "../../adapters/prisma";
import { IBill } from "../../domain/bill";
import { IBillRepository } from "../../domain/bill/repository";



async function find(filter: { [key: string]: any }) {
  return await prisma.bill.findMany({
    where: filter,
  });
}
async function create(dataBill: IBill | any) {
  await prisma.bill.create({
    data: dataBill,
  });
}

export const prismaBillRepository: IBillRepository = {
  create,
  find,
};
