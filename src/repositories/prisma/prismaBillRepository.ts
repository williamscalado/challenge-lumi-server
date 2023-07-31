import { prisma } from "../../adapters/prisma";
import { IBill } from "../../domain/bill";
import { IBillRepository } from "../../domain/bill/repository";

async function find(filter: { [key: string]: any }) {
  return await prisma.bill.findMany({
    where: filter,
  });
}

async function getStatistics(yearFilter: string, MonthFilter: string) {
  const now = new Date();
  const year = Number(yearFilter == undefined ? now.getFullYear() : yearFilter);
  const month = Number(MonthFilter == undefined ? now.getMonth() : MonthFilter)
    .toString()
    .padStart(2, "0");

  const metricsToMonth = await prisma.bill.aggregate({
    where: {
      reference: {
        gte: new Date(`${year}-${month}-01T00:00:00Z`), // Data de início do ano atual
        lt: new Date(
          `${year}-${(Number(month) + 1)
            .toString()
            .padStart(2, "0")}-01T00:00:00Z`
        ), // Data de início do próximo ano
      },
    },
    _sum: {
      energy_send_unit: true,
      energy_unit: true,
      energy_amount: true,
      energy_send_amount: true,
    },
  });
  console.log(
    `${year}-${month}-01T00:00:00Z`,
    `${year - 1}-${(Number(month) + 1)
      .toString()
      .padStart(2, "0")}-01T00:00:00Z`
  );
  const metricsToYear = await prisma.bill.findMany({
    select: {
      reference: true,
      energy_send_unit: true,
      energy_unit: true,
    },
    where: {
      reference: {
        gte: new Date(`${year - 1}-${month}-01T00:00:00Z`),
        lt: new Date(
          `${year}-${(Number(month) + 1)
            .toString()
            .padStart(2, "0")}-01T00:00:00Z`
        ),
      },
    },
  });

  return {
    metricsToMonth,
    metricsToYear,
  };
}

async function findAlL() {
  BigInt.prototype.toLocaleString = function () {
    return this.toString();
  };
  return await prisma.bill.findMany();
}

async function findBillByClient(yearFilter: string, numberClient: string) {
  BigInt.prototype.toLocaleString = function () {
    return this.toString();
  };
  const now = new Date();
  const year = Number(yearFilter == undefined ? now.getFullYear() : yearFilter);
  const whereOpt =
    numberClient == undefined ? {} : { client_number: Number(numberClient) };

  return await prisma.bill.findMany({
    where: whereOpt,
    distinct: ["client_number"],
    select: {
      client: {
        include: {
          bill: {
            where: {
              reference: {
                gte: new Date(`${year}-01-01T00:00:00Z`), // Data de início do ano atual
                lt: new Date(`${year + 1}-01-01T00:00:00Z`), // Data de início do próximo ano
              },
            },
          },
        },
      },
    },
  });
}

async function findUniqueYearByClient() {
  return await prisma.bill.groupBy({
    by: ["reference"],
  });
}
async function findUniqueByClient() {
  return await prisma.bill.groupBy({
    by: ["client_number"],
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
  findAlL,
  findBillByClient,
  findUniqueYearByClient,
  findUniqueByClient,
  getStatistics,
};
