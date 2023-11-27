import axios from "axios";

export const fetchCoinsData = axios.create({
  method: "GET",
  baseURL: process.env.REACT_APP_CRYPTO_API_URL,
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "100",
    offset: "0",
  },
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": process.env.REACT_APP_COINS_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  },
});
export const fetchCoinData = axios.create({
  method: "GET",
  baseURL: process.env.REACT_APP_CRYPTO_API_URL,
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  },
});
export const fetchExchangeData = axios.create({
  method: "GET",
  baseURL: process.env.REACT_APP_CRYPTO_API_EXCHANGE_URL,
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_EXCHANGE_RAPIDAPI_HOST,
  },
});
export const fetchCoinHistory = axios.create({
  method: "GET",
  baseURL: process.env.REACT_APP_CRYPTO_API_URL,
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  },
});
