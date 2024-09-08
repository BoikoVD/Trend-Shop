"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { captureException } from "@sentry/nextjs";
import { routes } from "@/constants/routes";
import Button from "@/components/UI/Button/Button";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    captureException(error);
  }, [error]);

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center gap-6">
      <h2 className="text-2xl">Something went wrong!</h2>
      <div className="flex gap-4">
        <Button onClick={() => router.push(routes.HOME)} color="dark">
          Go Home
        </Button>
        <Button onClick={() => reset()}>Try Again</Button>
      </div>
    </div>
  );
}
