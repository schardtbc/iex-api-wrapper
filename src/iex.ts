const baseURL = "https://api.iextrading.com/1.0";

import axios from "axios";
import * as date_fns from "date-fns"

export const iexClient = async (endpoint: string) => {
  let tmp: string = "";
  const value = await axios.get(baseURL + endpoint);
  tmp = value.data;
  return tmp;
};

export const getLastMarketOpenDate = (): string => {
  const weekAdj = [2,3,1,1,1,1,1]
  const today = new Date();
  let dayOfWeek = date_fns.getDay(today);
  const priorDate = date_fns.subDays(today, weekAdj[dayOfWeek])
  return date_fns.format(priorDate,"YYYYMMDD")
}