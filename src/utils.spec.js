import { parseSearch } from "./utils";

describe("parseSearch function", () => {
  it("parse search property of location object", () => {
    const queries = parseSearch("?query=hello&day=3");
    expect(queries).toEqual({
      query: "hello",
      day: 3,
    });
  });
});
