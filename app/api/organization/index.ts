import useSWR from "swr";
import { api } from "../axios/api";

const token = localStorage.getItem("store_token") || ""

const fetcher = (url: string) =>
  api({ url, method: "GET", token: token }).then((res) => res);

export function useOrgs() {
  const { data, error, isLoading } = useSWR("/organization", fetcher);
  return {
    orgs: data ?? null,
    loading: isLoading,
    error: error ? "Could not load organizations." : null,
  };
}
