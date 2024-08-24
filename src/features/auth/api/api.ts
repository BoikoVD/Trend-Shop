import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import {
  LoginResponse,
  Profile,
  schemaLogin,
  schemaProfile
} from "../schemas/schemas";
import {
  getTokens,
  removeTokens,
  removeUser,
  saveTokens
} from "../utils/cookies";
import { randomIntFromInterval } from "../utils/math";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

const refreshAuth = async (failedRequest: any) => {
  try {
    const newTokens = await refreshToken();
    if (newTokens && newTokens?.access_token) {
      failedRequest.response.config.headers.Authorization =
        "Bearer " + newTokens.access_token;
      client.defaults.headers.common.Authorization = `Bearer ${newTokens.access_token}`;
      saveTokens(newTokens);
      return Promise.resolve(newTokens.access_token);
    } else {
      throw new Error("No tokens data!");
    }
  } catch (e) {
    delete client.defaults.headers.common.Authorization;
    removeTokens();
    return Promise.reject();
  }
};

createAuthRefreshInterceptor(client, refreshAuth, {
  statusCodes: [401],
  pauseInstanceWhileRefreshing: true
});

export async function login(email: string, password: string): Promise<Profile> {
  const response = await client.post(`/auth/login`, {
    email,
    password
  });
  if (response.data) {
    const result = schemaLogin.parse(response.data);
    saveTokens(result);
    const profileData = await getMyProfile();
    if (profileData) {
      return profileData;
    } else {
      throw new Error("[Login api]: No profile data!");
    }
  } else {
    throw new Error("[Login api]: No login data!");
  }
}

export async function signUp(
  name: string,
  email: string,
  password: string
): Promise<Profile> {
  const randomAvatarId = randomIntFromInterval(1, 500);
  const response = await client.post(`/users`, {
    name,
    email,
    password,
    avatar: `https://picsum.photos/id/${randomAvatarId}/500`
  });
  if (response.data) {
    const result = schemaProfile.parse(response.data);
    return result;
  } else {
    throw new Error("[Login api]: No login data!");
  }
}

export async function refreshToken(): Promise<LoginResponse> {
  const tokens = getTokens();

  const response = await client.post(`/auth/refresh-token`, {
    refreshToken: tokens?.refresh_token
  });

  if (response.data) {
    const result = schemaLogin.parse(response.data);
    saveTokens(result);
    return result;
  } else {
    removeTokens();
    removeUser();
    throw new Error("[Refresh Token api]: No token data!");
  }
}

export async function getMyProfile(): Promise<Profile | null> {
  const tokens = getTokens();
  if (!tokens) {
    return null;
  }
  const response = await client.get(`/auth/profile`, {
    headers: {
      Authorization: `Bearer ${tokens.access_token}`
    }
  });

  if (response.data) {
    const result = schemaProfile.parse(response.data);
    return result;
  } else {
    throw new Error("[Profile api]: No profile data!");
  }
}
