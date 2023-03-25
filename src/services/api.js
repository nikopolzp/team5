import axios from "axios";
export const apiDummyJson = axios.create({
  baseURL: "https://dummyjson.com",
});
