import { iexClient, getLastMarketOpenDate } from "./iex";

test("iexClient Exists", () => {
  expect(iexClient).toBeTruthy();
});

test("iexClient can return api data", async () => {
  const tmp = await iexClient("/stock/AAPL/price");
  expect(tmp).toEqual(expect.any(Number));
});

test("that getLastMarketOpenDate works", () => {
  expect(getLastMarketOpenDate()).toEqual(expect.any(String));
});
