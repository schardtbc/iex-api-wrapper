# IEX API Wrapper

[![CircleCI](https://circleci.com/gh/schardtbc/iex-api-wrapper.svg?style=svg)](https://circleci.com/gh/schardtbc/iex-api-wrapper)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) 
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

IEX Group operates the Investors Exchange (IEX), a stock exchange for U.S. equities that is built for investors and companies. They currently
handle 3% of daily market trading volume

The company provides a rest API with historical data (daily) five years deep. Intraday data by the minute for prior 30 days.  

https://iextrading.com/developer/docs/ 

# Installation

```sh
npm install iex-api-wrapper
```

# Usage

```javascript
import * as IEX from "iex-api-wrapper"
```

Reminder that all IEX static methods return a Promise


## Methods

```javascript

export declare function allSymbols(): Promise<any>;
export declare function price(symbol: string): Promise<any>;
export declare function profile(symbol: string): Promise<any>;
export declare function ohlc(symbol: string): Promise<any>;
export declare function book(symbol: string): Promise<any>;
export declare function quote(symbol: string): Promise<any>;
export declare function effectiveSpread(symbol: string): Promise<any>;
export declare function previous(symbol: string): Promise<any>;
export declare function dividends(symbol: string, range?: string): Promise<any>;
export declare function earnings(symbol: string): Promise<any>;
export declare function peers(symbol: string): Promise<any>;
export declare function history(symbol: string, range?: string): Promise<any>;
export declare function byMinuteToday(symbol: string): Promise<any>;
export declare function byMinuteFor(symbol: string, dateAsYYYYMMDD: string): Promise<any>;
export declare function annualFinancials(symbol: string): Promise<any>;
export declare function quarterlyFinancials(symbol: string): Promise<any>;
export declare function tops(symbols: string): Promise<any>;
export declare function last(symbols: string): Promise<any>;
export declare function auction(symbols: string): Promise<any>;
```