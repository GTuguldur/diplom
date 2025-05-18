import { api } from "../axios/api";

export async function useProduct() {
  return api({
    url: "/product",
    method: "GET",
  });
}