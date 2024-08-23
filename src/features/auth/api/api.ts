import axios from "axios";
import { Profile, schemaLogin, schemaProfile } from "../schemas/schemas";
import { getTokens, saveTokens } from "../utils/cookies";
import { randomIntFromInterval } from "../utils/math";

export async function login(email: string, password: string): Promise<Profile> {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      email,
      password
    }
  );
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
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/users`,
    {
      name,
      email,
      password,
      avatar: `https://picsum.photos/id/${randomAvatarId}/500`
    }
  );
  if (response.data) {
    const result = schemaProfile.parse(response.data);
    return result;
  } else {
    throw new Error("[Login api]: No login data!");
  }
}

export async function getMyProfile(): Promise<Profile | null> {
  const tokens = getTokens();
  console.log("tokens ", tokens);
  if (!tokens) {
    return null;
  }
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/profile`,
    {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`
      }
    }
  );

  if (response.data) {
    const result = schemaProfile.parse(response.data);
    return result;
  } else {
    throw new Error("[Profile api]: No profile data!");
  }
}
