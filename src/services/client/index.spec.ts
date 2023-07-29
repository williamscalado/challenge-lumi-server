import { clientService } from ".";
import { clientValidation } from "../../http/controllers/client/validation";
import { prismaClientRepository } from "../../repositories/prisma/prismaClientRepository";

jest.mock("../../repositories/client");
jest.mock("../../http/controllers/client/validation");

describe("Client Service Unit Tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("create should call clientRepository.create with the correct data", async () => {
    const mockDataClient = [
      {
        client_number: 12345678,
        name: "John Doe",
        address: "no street",
      },
    ];

    const mockNewClientData = {
      ...mockDataClient,
      createAt: expect.any(Number),
      updateAt: expect.any(Number),
    };

    await clientService.create(mockDataClient);

    expect(clientValidation.parse).toHaveBeenCalledWith(mockDataClient);
    expect(prismaClientRepository.create).toHaveBeenCalledWith(
      mockNewClientData
    );
  });
});
