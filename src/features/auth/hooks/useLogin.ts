import {
  UseMutateFunction,
  useMutation,
  useQueryClient
} from "@tanstack/react-query";
import { LoginData, Profile } from "../schemas/schemas";
import { login } from "../api/api";
import { useRouter } from "next/navigation";
import { QUERY_KEYS } from "../utils/constatnts";
import { routes } from "@/constants/routes";

type IUseLogin = UseMutateFunction<Profile, unknown, LoginData, unknown>;

export function useLogin(): IUseLogin {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: loginMutation } = useMutation<
    Profile,
    unknown,
    LoginData,
    unknown
  >({
    mutationFn: ({ email, password }) => login(email, password),
    onSuccess: data => {
      queryClient.setQueryData([QUERY_KEYS.user], data);
      router.push(routes.PRODUCTS);
    },
    onError: (error: unknown) => {
      console.log(error);
    }
  });

  return loginMutation;
}
