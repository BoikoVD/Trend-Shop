"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/UI/Button/Button";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { routes } from "@/constants/routes";
import { useUser } from "../../hooks/useUser";
import { useLogout } from "../../hooks/useLogout";

export function UserInfo({
  className,
  setIsMenuOpen
}: {
  className?: string;
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>;
}) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user } = useUser();
  const logout = useLogout();
  const ref = useOutsideClick(() => {
    setIsUserMenuOpen(false);
  });

  if (!user) {
    return null;
  }

  return (
    <div
      className={`relative mt-6 flex flex-col items-center gap-6 rounded-md border border-gray-300 px-10 py-6 dark:bg-gray-500 lg:mt-0 lg:p-0 ${className}`}
    >
      <div
        className="flex items-center gap-3 lg:p-2"
        onClick={() => setIsUserMenuOpen(prev => !prev)}
      >
        <p className="max-w-[100px] truncate">{user.name}</p>
        <div className="h-[35px] w-[35px] overflow-hidden rounded-full border border-gray-300">
          <Image
            src={user.avatar}
            alt="avatar"
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div
        className={`flex flex-col items-center rounded-xl lg:absolute lg:right-[50%] lg:top-[calc(100%+10px)] lg:z-10 lg:translate-x-[50%] lg:border lg:border-gray-300 lg:bg-white lg:px-8 lg:py-6 lg:transition-all lg:duration-300 dark:lg:bg-gray-500 ${isUserMenuOpen ? "lg:opacity-1 lg:visible" : "lg:invisible lg:opacity-0"}`}
        ref={ref}
      >
        <Link
          href={routes.PROFILE}
          onClick={() => {
            if (setIsMenuOpen) {
              setIsMenuOpen(false);
            }
            setIsUserMenuOpen(false);
          }}
        >
          Profile
        </Link>
        <Button size="small" color="dark" className="mt-4" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
