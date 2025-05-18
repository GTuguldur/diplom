import type { ApiResponse } from "../axios";
import { api } from "../axios/api";


type UserBody = {
  identifier: string;
  password: string;
};

// (adjust this to whatever your login endpoint actually returns)
type LoginPayload = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  message?: string;
};

export async function loginUser(input: UserBody) {
  return api<any>({
    url: "/user/login",
    method: "POST",
    data: input,
  });
}
