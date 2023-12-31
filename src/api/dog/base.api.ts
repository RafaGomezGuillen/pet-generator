import axios from "axios";

const BASE_URL = "https://dog.ceo/api/";
const BASE_URL2 = "https://random.dog/";

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const instance2 = axios.create({
  baseURL: BASE_URL2,
});
