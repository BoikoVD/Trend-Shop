import { z } from "zod";

export interface LoginData {
  email: string;
  password: string;
}
export const schemaLogin = z.object({
  access_token: z.string(),
  refresh_token: z.string()
});
export type LoginResponse = z.infer<typeof schemaLogin>;

export interface SignUpData extends LoginData {
  name: string;
}

export const schemaProfile = z.object({
  id: z.number(),
  email: z.string(),
  password: z.string(),
  name: z.string(),
  role: z.string(),
  avatar: z.string(),
  creationAt: z.string(),
  updatedAt: z.string()
});
export type Profile = z.infer<typeof schemaProfile>;
