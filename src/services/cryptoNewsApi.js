import axios from "axios";

export const fetchNewsData = axios.create({
  baseURL: "https://newsdata.io",
  headers: {
    "Content-Type": "application/json",
  },
});
