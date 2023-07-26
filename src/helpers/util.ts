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
