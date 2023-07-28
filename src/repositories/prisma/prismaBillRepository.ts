import { prisma } from "../../adapters/prisma";
import { IBill } from "../../domain/bill";
import { IBillRepository } from "../../domain/bill/repository";

interface IFilters {
  filter: string;
  valeu: string;
}

async function find(filter: IFilters) {}
async function create(dataBill: IBill[] | any) {
  await prisma.bill.createMany({
    data: dataBill,
    skipDuplicates: true,
  });
}

export const prismaBillRepository: IBillRepository = {
  create,
  find,
};
