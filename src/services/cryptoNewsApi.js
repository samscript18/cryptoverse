import axios from "axios";

export const fetchNewsData = axios.create({
  baseURL: process.env.REACT_APP_NEWS_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
