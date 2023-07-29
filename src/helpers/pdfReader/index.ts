import { PDFData } from "pdf-parse";
import {
  convertToISODateReference,
  formatDataToIso,
  transformValueInCents,
} from "../util";

const pdfParse = require("pdf-parse");

export const transformDataInArray = (data: string | boolean) =>
  String(data)
    .split("\n")
    .map((item) => item.trim().replace(/\s{2,}/g, " "));

export const getGeneralInfo = async (data: any[]) => {
  let clientName,
    clientAddress,
    clientNumber,
    reference,
    expiration,
    amount,
    energyKWH,
    energyUnitPrice,
    energyAmount,
    energySICMSKWH,
    energySICMSUnitPrice,
    energySICMSAmount,
    energyInjectKWH,
    energyInjectUnitPrice,
    energyInjectAmount,
    energyPublicAmount;

  for (let i = 0; i < data.length; i++) {
    const text = data[i];
    if (text.includes("Nº DO CLIENTE Nº DA INSTALAÇÃO")) {
      clientNumber = data[i + 1].split(" ")[0];
    }
    if (text.includes("CPF ")) {
      clientName = data[i - 4];
      clientAddress = data[i - 3] + data[i - 2] + data[i - 1];
    }
    if (text.includes("Referente a Vencimento")) {
      const result = data[i + 1].split(" ");
      reference = convertToISODateReference(result[0]);
      expiration = formatDataToIso(result[1]);
      amount = transformValueInCents(result[2]);
    }
    if (text.includes("Valores Faturados")) {
      const resultEnergy = data[i + 3].split(" ");
      energyKWH = Number(resultEnergy[2]);
      energyUnitPrice = transformValueInCents(resultEnergy[3]);
      energyAmount = transformValueInCents(resultEnergy[4]);

      const resultEnergyInject = data[i + 4].split(" ");
      energyInjectKWH = Number(resultEnergyInject.at(-4));
      energyInjectUnitPrice = transformValueInCents(resultEnergyInject.at(-3));
      energyInjectAmount = transformValueInCents(resultEnergyInject.at(-2));
    }

    if (text.includes("Contrib Ilum Publica")) {
      const resultEnergyPublic = data[i].split(" ");
      energyPublicAmount = transformValueInCents(resultEnergyPublic.at(-1));
    }
    if (text.includes("s/ ICMS")) {
      const resultEnergyIcms = data[i].split(" ");
      energySICMSKWH = Number(resultEnergyIcms.at(-4));
      energySICMSUnitPrice = transformValueInCents(resultEnergyIcms.at(-3));
      energySICMSAmount = transformValueInCents(resultEnergyIcms.at(-2));
    }
  }
  const result = {
    name: clientName,
    address: clientAddress,
    client_number: clientNumber,
    expiration_date: expiration,
    reference: reference,
    energy_unit: energyKWH,
    energy_price: energyUnitPrice,
    energy_amount: energyAmount,
    energy_send_unit: energyInjectKWH,
    energy_send_price: energyInjectUnitPrice,
    energy_send_amount: energyInjectAmount,
    contribution_lighting: energyPublicAmount,
    energy_icms_unit: energySICMSKWH,
    energy_icms_price: energySICMSUnitPrice,
    energy_icms_amount: energySICMSAmount,
    amount,
  };
  return result;
};

export async function getTextByPdfBuffer(
  buffer: Buffer
): Promise<string | boolean> {
  try {
    const result: PDFData = await pdfParse(buffer);
    return result.text;
  } catch (error) {
    return false;
  }
}

export async function processPDFs(pdf: any[]) {
  const promises = pdf.map(async (item: any) => {
    const textoDoPDF = await getTextByPdfBuffer(item.buffer);
    const arr = transformDataInArray(textoDoPDF);
    const resultPdf = getGeneralInfo(arr);
    return resultPdf;
  });

  const result = await Promise.all(promises);
  return result;
}
