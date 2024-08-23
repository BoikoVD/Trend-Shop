import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";
import { QUERY_KEYS } from "../utils/constatnts";

type IUseLogout = () => void;

export function useLogout(): IUseLogout {
  const queryClient = useQueryClient();
  const router = useRouter();

  const onLogout = useCallback(() => {
    queryClient.setQueryData([QUERY_KEYS.user], null);
    router.push(routes.HOME);
  }, [router, queryClient]);

  return onLogout;
}
