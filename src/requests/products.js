import { apiDummyJson } from "../services/api";

export function getAllProducts() {
  return apiDummyJson.get("/products");
}

export function getProductById(id) {
  return apiDummyJson.get(`/products/${id}`);
}
