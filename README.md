# IEX API Wrapper

IEX Group operates the Investors Exchange (IEX), a stock exchange for U.S. equities that is built for investors and companies. They currently
handle 3% of daily market trading volume

The company provides a rest API with historical data (daily) five years deep. Intraday data by the minute for prior 30 days.  

https://iextrading.com/developer/docs/ 

# Installation

```
npm install iex-api-wrapper
```

# Usage

```{javascript}
import IEX from "iex-api-wrapper"

//remember that all IEX static methods return a Promise

let currentPrice: number = 0;
IEX.price("AAPL").then(res => currentPrice = res);
//146.2
```
## IEX public static methods

```{javascript}
import { iexClient } from "./iex";

export class IEX {

    public static allSymbols(){
        return iexClient("/ref-data/symbols");
      }

  public static price(symbol: string) {
    return iexClient(`/stock/${symbol}/price`);
  }

  public static profile(symbol: string) {
    return iexClient(`/stock/${symbol}/company`);
  }

  public static ohlc(symbol: string) {
    return iexClient(`/stock/${symbol}/ohlc`);
  } 

  public static book(symbol: string) {
    return iexClient(`/stock/${symbol}/book`);
  }

  public static quote(symbol: string) {
    return iexClient(`/stock/${symbol}/quote`);
  } 

  public static effectiveSpread(symbol: string) {
    return iexClient(`/stock/${symbol}/effective-spread`);
  } 

  public static previous(symbol: string) {
    return iexClient(`/stock/${symbol}/previous`);
  }

  public static dividends(symbol: string, range: string = "6m") {
    return iexClient(`/stock/${symbol}/dividends/${range}`);   
  }
  public static earnings(symbol: string) {
    return iexClient(`/stock/${symbol}/earnings`);
  }

  public static peers(symbol: string) {
    return iexClient(`/stock/${symbol}/peers`);
  }

  public static history(symbol: string, range: string = "1m") {
    return iexClient(`/stock/${symbol}/chart/${range}`);
  }

  public static byMinuteToday(symbol: string) {
    return iexClient(`/stock/${symbol}/chart/1d`);   
  }

  public static byMinuteFor(symbol: string, dateAsYYYYMMDD: string) {
    return iexClient(`/stock/${symbol}/chart/date/${dateAsYYYYMMDD}`);   
  }

  public static annualFinancials(symbol: string) {
    return iexClient(`/stock/${symbol}/financials?period=annual`)
  }

  public static quarterlyFinancials(symbol: string) {
    return iexClient(`/stock/${symbol}/financials?period=quarter`)
  }

}
```