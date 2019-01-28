import { iexClient } from "./iex";

export function allSymbols() {
  return iexClient("/ref-data/symbols");
}

export function price(symbol: string) {
  return iexClient(`/stock/${symbol}/price`);
}

export function profile(symbol: string) {
  return iexClient(`/stock/${symbol}/company`);
}

export function ohlc(symbol: string) {
  return iexClient(`/stock/${symbol}/ohlc`);
}

export function book(symbol: string) {
  return iexClient(`/stock/${symbol}/book`);
}

export function quote(symbol: string) {
  return iexClient(`/stock/${symbol}/quote`);
}

export function effectiveSpread(symbol: string) {
  return iexClient(`/stock/${symbol}/effective-spread`);
}

export function previous(symbol: string) {
  return iexClient(`/stock/${symbol}/previous`);
}

export function dividends(symbol: string, range: string = "6m") {
  return iexClient(`/stock/${symbol}/dividends/${range}`);
}
export function earnings(symbol: string) {
  return iexClient(`/stock/${symbol}/earnings`);
}

export function peers(symbol: string) {
  return iexClient(`/stock/${symbol}/peers`);
}

export function history(symbol: string, range: string = "1m") {
  return iexClient(`/stock/${symbol}/chart/${range}`);
}

export function byMinuteToday(symbol: string) {
  return iexClient(`/stock/${symbol}/chart/1d`);
}

export function byMinuteFor(symbol: string, dateAsYYYYMMDD: string) {
  return iexClient(`/stock/${symbol}/chart/date/${dateAsYYYYMMDD}`);
}

export function annualFinancials(symbol: string) {
  return iexClient(`/stock/${symbol}/financials?period=annual`);
}

export function quarterlyFinancials(symbol: string) {
  return iexClient(`/stock/${symbol}/financials?period=quarter`);
}

export function tops(symbols: string = "") {
  if (symbols) {
    return iexClient(`/tops?symbols=${symbols}`);
  } else {
    return iexClient(`/tops`);
  }
}

export function last(symbols: string = "") {
  if (symbols) {
    return iexClient(`/tops/last?symbols=${symbols}`);
  } else {
    return iexClient(`/tops/last`);    
  }
}

export function auction(symbols: string = "") {
  return iexClient(`/deep/auction?symbols=${symbols}`);
}
