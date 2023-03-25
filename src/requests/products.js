import { apiDummyJson } from "../services/api";

export function getAllProducts() {
  return apiDummyJson.get("/products");
}
