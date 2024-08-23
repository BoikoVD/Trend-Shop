"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center rounded-xl border-2 border-gray-300 px-4 py-4 dark:bg-gray-400 sm:px-20 sm:py-10"
    >
      <p className="mb-6 text-4xl text-purple-400 sm:mb-10">Sign Up</p>
      <Input
        id="name"
        type="text"
        labelText="Name"
        className="mb-4 sm:mb-6"
        {...register("name", {
          required: "The name field is required",
          validate: {
            withWhitespace: v =>
              !v.includes(" ") || "The name field cannot include whitespace"
          }
        })}
        error={errors.name?.message}
      />
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
        className="mb-4 sm:mb-6"
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
      <Input
        id="confirmPassword"
        type="password"
        labelText="Confirm Password"
        className="mb-6 sm:mb-10"
        {...register("confirmPassword", {
          required: "The confirm password field is required",
          minLength: {
            value: 6,
            message: "The minimum length of password is 6"
          },
          validate: {
            isEquealToPass: v =>
              watch("password") === v || "Your passwords do not match",
            withWhitespace: v =>
              !v.includes(" ") ||
              "The confirm password field cannot include whitespace"
          }
        })}
        error={errors.confirmPassword?.message}
      />
      <Button type="submit" className="min-w-[150px] sm:min-w-[280px]">
        Sign Up
      </Button>
    </form>
  );
}
