import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { LoginResponse, Profile } from "../schemas/schemas";

const ACCESS_TOKEN_LOCAL_STORAGE_KEY = "ACCESS_TOKEN";
const REFRESH_TOKEN_LOCAL_STORAGE_KEY = "REFRESH_TOKEN";
const USER_LOCAL_STORAGE_KEY = "USER";

export function saveTokens(tokens: LoginResponse): void {
  setCookie(ACCESS_TOKEN_LOCAL_STORAGE_KEY, tokens.access_token);
  setCookie(REFRESH_TOKEN_LOCAL_STORAGE_KEY, tokens.refresh_token);
}

export function getTokens(): LoginResponse | null {
  const accessToken = getCookie(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
  const refreshToken = getCookie(REFRESH_TOKEN_LOCAL_STORAGE_KEY);
  return accessToken && refreshToken
    ? {
        access_token: accessToken,
        refresh_token: refreshToken
      }
    : null;
}

export function removeTokens(): void {
  deleteCookie(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
  deleteCookie(REFRESH_TOKEN_LOCAL_STORAGE_KEY);
}

export function saveUser(user: Profile): void {
  setCookie(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
}

export function getUser(): Profile | null {
  const user = getCookie(USER_LOCAL_STORAGE_KEY);
  return user ? JSON.parse(user) : null;
}

export function removeUser(): void {
  deleteCookie(USER_LOCAL_STORAGE_KEY);
}
