/**
 * @jest-environment node
 */

import { IEX } from "./index";
import { getLastMarketOpenDate } from "./iex";

test("Does allSymbols work with async await", async () => {
  const tmp = await IEX.allSymbols();
  expect(tmp).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        symbol: expect.any(String),
        name: expect.any(String),
        date: expect.any(String),
        isEnabled: expect.any(Boolean),
        type: expect.any(String),
        iexId: expect.any(String)
      })
    ])
  );
});

test("Apple Stock price works with async await", async () => {
  const tmp = await IEX.price("AAPL");
  expect(tmp).toEqual(expect.any(Number));
});

test("Apple Stock profile() works with async await", async () => {
  const tmp = await IEX.profile("AAPL");
  expect(tmp).toEqual(
    expect.objectContaining({
      symbol: "AAPL",
      companyName: "Apple Inc."
    })
  );
});

test("Apple Stock ohlc() works with async await", async () => {
  const tmp = await IEX.ohlc("AAPL");
  expect(tmp).toEqual(
    expect.objectContaining({
      open: { price: expect.any(Number), time: expect.any(Number) },
      close: { price: expect.any(Number), time: expect.any(Number) },
      high: expect.any(Number),
      low: expect.any(Number)
    })
  );
});

test("Apple Stock book() works with async await", async () => {
  const tmp = await IEX.book("AAPL");
  expect(tmp).toEqual(
    expect.objectContaining({
      quote: expect.objectContaining({
        symbol: "AAPL",
        companyName: "Apple Inc.",
        primaryExchange: "Nasdaq Global Select",
        sector: "Technology"
      })
    })
  );
});

test("Apple Stock quote() works with async await", async () => {
  const tmp = await IEX.quote("AAPL");
  expect(tmp).toEqual(
    expect.objectContaining({
      symbol: "AAPL",
      companyName: "Apple Inc.",
      primaryExchange: "Nasdaq Global Select",
      sector: "Technology"
    })
  );
});

test("Apple Stock effectiveSpread() works with async await", async () => {
  const tmp = await IEX.effectiveSpread("AAPL");
  expect(tmp).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        volume: expect.any(Number),
        venue: expect.any(String)
      })
    ])
  );
});

test("Apple Stock previous() works with async await", async () => {
  const tmp = await IEX.previous("AAPL");
  expect(tmp).toEqual({
    symbol: "AAPL",
    date: expect.any(String),
    open: expect.any(Number),
    high: expect.any(Number),
    low: expect.any(Number),
    close: expect.any(Number),
    volume: expect.any(Number),
    unadjustedVolume: expect.any(Number),
    change: expect.any(Number),
    changePercent: expect.any(Number),
    vwap: expect.any(Number)
  });
});

test("Apple Stock dividends() works with async await", async () => {
  const tmp = await IEX.dividends("AAPL", "6m");
  expect(tmp).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        exDate: expect.any(String),
        paymentDate: expect.any(String),
        recordDate: expect.any(String),
        declaredDate: expect.any(String),
        amount: expect.any(Number),
        type: expect.any(String),
        qualified: expect.any(String)
      })
    ])
  );
});

test("Apple Stock dividends() works with async await", async () => {
  const tmp = await IEX.dividends("AAPL");
  expect(tmp).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        exDate: expect.any(String),
        paymentDate: expect.any(String),
        recordDate: expect.any(String),
        declaredDate: expect.any(String),
        amount: expect.any(Number),
        type: expect.any(String),
        qualified: expect.any(String)
      })
    ])
  );
});

test("Apple Stock earnings() works with async await", async () => {
  const tmp = await IEX.earnings("AAPL");
  expect(tmp).toEqual(
    expect.objectContaining({
      symbol: "AAPL",
      earnings: expect.arrayContaining([
        expect.objectContaining({
          actualEPS: expect.any(Number),
          consensusEPS: expect.any(Number),
          estimatedEPS: expect.any(Number),
          announceTime: expect.any(String),
          numberOfEstimates: expect.any(Number),
          EPSSurpriseDollar: expect.any(Number),
          EPSReportDate: expect.any(String),
          fiscalPeriod: expect.any(String),
          fiscalEndDate: expect.any(String),
          yearAgo: expect.any(Number),
          yearAgoChangePercent: expect.any(Number),
          estimatedChangePercent: expect.any(Number),
          symbolId: expect.any(Number)
        })
      ])
    })
  );
});

test("Apple Stock earnings() works with async await", async () => {
  const tmp = await IEX.peers("AAPL");
  expect(tmp).toEqual(expect.arrayContaining([expect.any(String)]));
});

test("Apple Stock history() works with async await", async () => {
  const tmp = await IEX.history("AAPL");
  expect(tmp).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        date: expect.any(String),
        open: expect.any(Number),
        high: expect.any(Number),
        low: expect.any(Number),
        close: expect.any(Number),
        volume: expect.any(Number),
        unadjustedVolume: expect.any(Number),
        change: expect.any(Number),
        changePercent: expect.any(Number),
        vwap: expect.any(Number),
        label: expect.any(String),
        changeOverTime: expect.any(Number)
      })
    ])
  );
});

test("Apple Stock 1m history() works with async await", async () => {
  const tmp = await IEX.history("AAPL", "3m");
  expect(tmp).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        date: expect.any(String),
        open: expect.any(Number),
        high: expect.any(Number),
        low: expect.any(Number),
        close: expect.any(Number),
        volume: expect.any(Number),
        unadjustedVolume: expect.any(Number),
        change: expect.any(Number),
        changePercent: expect.any(Number),
        vwap: expect.any(Number),
        label: expect.any(String),
        changeOverTime: expect.any(Number)
      })
    ])
  );
});

test("Apple Stock byMinuteToday() works with async await", async () => {
  const tmp = await IEX.byMinuteToday("AAPL");
  expect(tmp).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        date: expect.any(String),
        minute: expect.any(String),
        label: expect.any(String),
        high: expect.any(Number),
        low: expect.any(Number),
        average: expect.any(Number),
        volume: expect.any(Number),
        notional: expect.any(Number),
        numberOfTrades: expect.any(Number),
        marketHigh: expect.any(Number),
        marketLow: expect.any(Number),
        marketAverage: expect.any(Number),
        marketVolume: expect.any(Number),
        marketNotional: expect.any(Number),
        marketNumberOfTrades: expect.any(Number),
        open: expect.any(Number),
        close: expect.any(Number),
        marketOpen: expect.any(Number),
        marketClose: expect.any(Number),
        changeOverTime: expect.any(Number),
        marketChangeOverTime: expect.any(Number)
      })
    ])
  );
});

test('Apple Stock history("AAPL",1d) works with async await', async () => {
  const tmp = await IEX.history("AAPL", "1d");
  expect(tmp).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        date: expect.any(String),
        minute: expect.any(String),
        label: expect.any(String),
        high: expect.any(Number),
        low: expect.any(Number),
        average: expect.any(Number),
        volume: expect.any(Number),
        notional: expect.any(Number),
        numberOfTrades: expect.any(Number),
        marketHigh: expect.any(Number),
        marketLow: expect.any(Number),
        marketAverage: expect.any(Number),
        marketVolume: expect.any(Number),
        marketNotional: expect.any(Number),
        marketNumberOfTrades: expect.any(Number),
        open: expect.any(Number),
        close: expect.any(Number),
        marketOpen: expect.any(Number),
        marketClose: expect.any(Number),
        changeOverTime: expect.any(Number),
        marketChangeOverTime: expect.any(Number)
      })
    ])
  );
});

test('Apple Stock byMinuteFor("AAPL","20190102") works with async await', async () => {
  const trialDate = getLastMarketOpenDate();
  const tmp = await IEX.byMinuteFor("AAPL", getLastMarketOpenDate());
  expect(tmp).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        date: expect.any(String),
        minute: expect.any(String),
        label: expect.any(String),
        high: expect.any(Number),
        low: expect.any(Number),
        average: expect.any(Number),
        volume: expect.any(Number),
        notional: expect.any(Number),
        numberOfTrades: expect.any(Number),
        marketHigh: expect.any(Number),
        marketLow: expect.any(Number),
        marketAverage: expect.any(Number),
        marketVolume: expect.any(Number),
        marketNotional: expect.any(Number),
        marketNumberOfTrades: expect.any(Number),
        open: expect.any(Number),
        close: expect.any(Number),
        marketOpen: expect.any(Number),
        marketClose: expect.any(Number),
        changeOverTime: expect.any(Number),
        marketChangeOverTime: expect.any(Number)
      })
    ])
  );
});

test('Apple Stock annualFinancials("AAPL") works with async await', async () => {
  const tmp = await IEX.annualFinancials("AAPL");
  expect(tmp).toEqual(
    expect.objectContaining({
      symbol: "AAPL",
      financials: expect.arrayContaining([
        expect.objectContaining({
          reportDate: expect.any(String),
          grossProfit: expect.any(Number),
          costOfRevenue: expect.any(Number),
          operatingRevenue: expect.any(Number),
          totalRevenue: expect.any(Number),
          operatingIncome: expect.any(Number),
          netIncome: expect.any(Number),
          researchAndDevelopment: expect.any(Number),
          operatingExpense: expect.any(Number),
          currentAssets: expect.any(Number),
          totalAssets: expect.any(Number),
          totalLiabilities: expect.any(Number),
          currentCash: expect.any(Number),
          currentDebt: expect.any(Number),
          totalCash: expect.any(Number),
          totalDebt: expect.any(Number),
          shareholderEquity: expect.any(Number),
          cashChange: expect.any(Number),
          cashFlow: expect.any(Number)
        })
      ])
    })
  );
});

test('Apple Stock quarterlyFinancials("AAPL") works with async await', async () => {
  const tmp = await IEX.quarterlyFinancials("AAPL");
  expect(tmp).toEqual(
    expect.objectContaining({
      symbol: "AAPL",
      financials: expect.arrayContaining([
        expect.objectContaining({
          reportDate: expect.any(String),
          grossProfit: expect.any(Number),
          costOfRevenue: expect.any(Number),
          operatingRevenue: expect.any(Number),
          totalRevenue: expect.any(Number),
          operatingIncome: expect.any(Number),
          netIncome: expect.any(Number),
          researchAndDevelopment: expect.any(Number),
          operatingExpense: expect.any(Number),
          currentAssets: expect.any(Number),
          totalAssets: expect.any(Number),
          totalLiabilities: expect.any(Number),
          currentCash: expect.any(Number),
          currentDebt: expect.any(Number),
          totalCash: expect.any(Number),
          totalDebt: expect.any(Number),
          shareholderEquity: expect.any(Number),
          cashChange: expect.any(Number),
          cashFlow: expect.any(Number)
        })
      ])
    })
  );
});
