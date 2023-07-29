export function getAllUniqueByField<T extends Record<string, any>>(
  data: T,
  field: keyof Record<string, T>
) {
  let newData: T[] = [];
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      if (!data[i].hasOwnProperty(field)) continue;
      if (!newData.some((item: T) => item[field] === data[i]?.[field])) {
        newData.push(data[i]);
      }
    }
    return newData;
  } else {
    return data;
  }
}

export const formatDataToIso = (reference: string) => {
  const date = new Date(reference);
  const isoDateString = date.toISOString();
  return isoDateString;
};

export function convertToISODateReference(dateString: string) {
  const months: { [key: string]: number } = {
    JAN: 0,
    FEV: 1,
    MAR: 2,
    ABR: 3,
    MAI: 4,
    JUN: 5,
    JUL: 6,
    AGO: 7,
    SET: 8,
    OUT: 9,
    NOV: 10,
    DEZ: 11,
  };
  const [month, year] = dateString.split("/");
  if (!month || !year) return;
  const monthNumber = months[month];
  const isoDate = new Date(Number(year), monthNumber, 1).toISOString();
  return isoDate;
}

export const transformValueInCents = (value: string): number => {
  const partes = value.split(",");
  const reais = partes[0].replace(/\D/g, "");
  const centavos = partes[1] ? partes[1].replace(/\D/g, "") : "00";
  return Number(reais + centavos);
};

function transformCentsInValue(cents: string) {
  const value = parseFloat(cents) / 100;
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
