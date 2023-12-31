import axios from "axios";

const BASE_URL = "https://cataas.com/";

export const instance = axios.create({
  baseURL: BASE_URL,
});