"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../utils/constatnts";
import * as userLocalStorage from "../utils/cookies";
import { useEffect, useState } from "react";
import { getMyProfile } from "../api/api";
import { Profile } from "../schemas/schemas";

interface IUseUser {
  user: Profile | null;
}

export function useUser(): IUseUser {
  const [isClient, setIsClient] = useState(false);

  const { data: user, error } = useQuery({
    queryKey: [QUERY_KEYS.user],
    queryFn: getMyProfile,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialData: userLocalStorage.getUser
  });

  useEffect(() => {
    if (!user || error) userLocalStorage.removeUser();
    else userLocalStorage.saveUser(user);
  }, [isClient, user, error]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return { user: null };
  }
  return { user: user };
}
