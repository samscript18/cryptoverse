import axios from "axios";

export const fetchCoinsData = axios.create({
  method: "GET",
  baseURL: "https://coinranking1.p.rapidapi.com",
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
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
});
export const fetchCoinData = axios.create({
  method: "GET",
  baseURL: "https://coinranking1.p.rapidapi.com",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
  },
  headers: {
    "X-RapidAPI-Key": "8b801e9b42msh2ba036c4fd99332p192a65jsn7b546c4101d4",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
});
export const fetchExchangeData = axios.create({
  method: "GET",
  baseURL: "https://coingecko.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "8b801e9b42msh2ba036c4fd99332p192a65jsn7b546c4101d4",
    "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
  },
});
export const fetchCoinHistory = axios.create({
  method: "GET",
  baseURL: "https://coinranking1.p.rapidapi.com",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
  },
  headers: {
    "X-RapidAPI-Key": "8b801e9b42msh2ba036c4fd99332p192a65jsn7b546c4101d4",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
});
