import { IClient, IClientRepository } from "../../types/client";

interface IFilters {
  filter: string;
  valeu: string;
}

const mockClient: IClient[] = [];
function findObjectInArray(arr: any, property: string, targetValue: string) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][property] === targetValue) {
      return arr[i];
    }
  }
  return null; // or undefined if you prefer
}

async function find(filter: IFilters) {
  return findObjectInArray(mockClient, filter.filter, filter.valeu);
}
async function create(dataClient: IClient) {
  mockClient.push(dataClient);
  console.log(mockClient);
}

export const clientRepository: IClientRepository = {
  create,
  find,
};
