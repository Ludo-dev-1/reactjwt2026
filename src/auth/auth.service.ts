
import {httpClient} from "../api/http-client";

export async function login(username:string, password: string) {
  const response = await httpClient.post("/auth/login", { username, password })
  localStorage.setItem("token", response.data.token)
    return response;
}

export async function logoutFunction(token: string ) {
  return localStorage.removeItem(`${token}`);
}


