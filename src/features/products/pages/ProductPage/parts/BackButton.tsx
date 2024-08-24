"use client";

import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "@/components/UI/Button/Button";
import { useRouter } from "next/navigation";

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className={`${className}`}
      leftIcon={AiOutlineArrowLeft}
      size="small"
      color="dark"
    >
      Back
    </Button>
  );
}
