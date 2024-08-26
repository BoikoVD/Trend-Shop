"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import { useLogin } from "../../../hooks/useLogin";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const login = useLogin();

  const onSubmit: SubmitHandler<Inputs> = data => {
    login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center rounded-xl border-2 border-light-400 px-4 py-4 dark:border-gray-300 dark:bg-gray-400 sm:px-20 sm:py-10"
    >
      <p className="mb-6 text-4xl text-purple-400 sm:mb-10">Login</p>
      <Input
        id="email"
        type="email"
        labelText="Email Address"
        className="mb-4 sm:mb-6"
        {...register("email", {
          required: "The email field is required",
          validate: {
            isValidEmail: v => isEmail(v) || "Wrong email address",
            withWhitespace: v =>
              !v.includes(" ") || "The email field cannot include whitespace"
          }
        })}
        error={errors.email?.message}
      />
      <Input
        id="password"
        type="password"
        labelText="Password"
        className="mb-6 sm:mb-10"
        {...register("password", {
          required: "The password field is required",
          minLength: {
            value: 6,
            message: "The minimum length of password is 6"
          },
          validate: {
            withWhitespace: v =>
              !v.includes(" ") || "The password field cannot include whitespace"
          }
        })}
        error={errors.password?.message}
      />
      <Button
        type="submit"
        className="min-w-[150px] justify-center sm:min-w-[280px]"
      >
        Login
      </Button>
    </form>
  );
}
