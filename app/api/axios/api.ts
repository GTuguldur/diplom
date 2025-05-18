import { iToken } from '@/app/hook/use-Token';
import axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';

// import 'dotenv/config';  // Ensure this line is at the top

export function isServer() {
  return typeof window === 'undefined';
}

export async function api<T>({
  url,
  method,
  token,
  data,
  config,
}: {
  url: string;
  method: Method;
  token?: string;
  data?: T;
  config?: AxiosRequestConfig;
}): Promise<ApiResponse<T>> {
  // const server = isServer();

  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const access_token = await iToken();
  const newToken = access_token ? access_token : token;

  const baseConfig: AxiosRequestConfig = {
    ...config,
    baseURL: config?.baseURL || baseUrl,
    method,
    url,
    data,
    headers: {
      ...(newToken ? { Authorization: `Bearer ${newToken}` } : {}),
      ...config?.headers,
    },
  };

  // // Log Axios request configuration
  // console.log("Axios Request Configuration:", baseConfig);

  let response: ApiResponse<T>;

  try {
    const axiosResponse = await axios(baseConfig);

    console.log({
      axiosResponse,
    });

    const success = axiosResponse.status === 200;

    let result: ApiResponse<T>;

    if (success) {
      result = {
        success: true,
        data: axiosResponse.data as T,
        message: axiosResponse.data.message,
      };
    } else {
      result = {
        success: false,
        error: {
          code: axiosResponse.status,
          message: 'Request failed',
        },
      };
    }

    if (process.env.NODE_ENV === 'development') {
      console.log({
        Api: url,
        Success: success,
        errorMessage: (result as ErrorResponse).error?.message,
        errorCode: (result as ErrorResponse).error?.code,
      });
    }

    response = result;
  } catch (error) {
    if (axios.isCancel(error)) {
      response = {
        success: false,
        error: {
          code: 1,
          message: 'Request cancelled',
        },
      };
    } else {
      let errorMessage = 'Та түр хүлээгээд дахин оролдоно уу';

      if (process.env.NODE_ENV === 'development') {
        console.log('error on ApiHelpers:', error);
      }

      if (error instanceof AxiosError) {
        console.log('ERROR', error.response?.data.message);
        errorMessage = error.response?.data.message || errorMessage; // use server error message if it exists
      }

      response = {
        success: false,
        error: {
          code: 0,
          message: errorMessage,
        },
      };
    }
  }

  return response;
}

export type SuccessResponse<T> = {
  success: true;
  data: T;
  message?: string;
  metaData?: {
    pageNumber: number;
    recordsPerPage: number;
    numberOfPages: number;
    numberOfRecords: number;
  };
};

type Error = {
  code: number;
  message: string;
};

type ErrorResponse = {
  success: false;
  error: Error;
};

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
