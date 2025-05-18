import axios from "axios";

console.log(process.env.NEXT_PUBLIC_IP)

export interface MetaData {
  total_row?: unknown;
}

export interface ApiResponse<TItems = unknown> {
  metadata?: MetaData;
  success: boolean;
  message: string;
  items?: TItems;
  error?: unknown;
  token?: string;
}


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_IP,
    withCredentials: true
})

export default axiosInstance