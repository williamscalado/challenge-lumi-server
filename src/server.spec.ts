import request from "supertest";
import { ServerConfig } from ".";

describe("Test page not-found", () => {
  it("Test return message and status code", async () => {
    const res = await request(ServerConfig.app).get("/page-no-found");
    expect(res.body).toEqual({ message: "Page not found!" });
    expect(res.status).toEqual(404);
  });
});
