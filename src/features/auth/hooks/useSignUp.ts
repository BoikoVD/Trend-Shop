import {
  UseMutateFunction,
  useMutation,
  useQueryClient
} from "@tanstack/react-query";
import { Profile, SignUpData } from "../schemas/schemas";
import { signUp } from "../api/api";
import { useRouter } from "next/navigation";
import { QUERY_KEYS } from "../utils/constatnts";
import { routes } from "@/constants/routes";

type IUseSignUp = UseMutateFunction<Profile, unknown, SignUpData, unknown>;

export function useSignUp(): IUseSignUp {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: signUpMutation } = useMutation<
    Profile,
    unknown,
    SignUpData,
    unknown
  >({
    mutationFn: ({ name, email, password }) => signUp(name, email, password),
    onSuccess: data => {
      //queryClient.setQueryData([QUERY_KEYS.user], data);
      router.push(routes.LOGIN);
    },
    onError: (error: unknown) => {
      console.log(error);
    }
  });

  return signUpMutation;
}
