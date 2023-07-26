import { getAllUniqueByField } from "./util";

describe("getAllUniqueByField", () => {
  it("should return an empty array if given an empty array", () => {
    const data: any = [];
    const field = "someField";
    expect(getAllUniqueByField(data, field)).toEqual([]);
  });

  it("should return the same array if the data is not an array", () => {
    const data = { someField: "value" };
    const field = "someField";
    expect(getAllUniqueByField(data, field)).toEqual(data);
  });

  it("should return an array with unique objects based on the specified field", () => {
    const data = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "John" },
      { id: 4, name: "Alice" },
      { id: 5, name: "Jane" },
    ];

    const field = "name";
    const expectedResult = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 4, name: "Alice" },
    ];

    expect(getAllUniqueByField(data, field)).toEqual(expectedResult);
  });

  it("should handle cases where data objects do not have the specified field", () => {
    const data = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3 },
      { id: 4, name: "Alice" },
      { id: 5 },
    ];

    const field = "name";
    const expectedResult = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 4, name: "Alice" },
    ];

    expect(getAllUniqueByField(data, field)).toEqual(expectedResult);
  });
});
