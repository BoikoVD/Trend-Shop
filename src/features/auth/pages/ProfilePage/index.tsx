"use client";
import Image from "next/image";
import { useUser } from "../../hooks/useUser";

export function ProfilePage() {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <main className="container flex flex-col items-center">
      <Image
        src={user.avatar}
        alt="avatar"
        width={260}
        height={260}
        priority
        className="z-10 mt-20 h-[160px] w-[160px] rounded-full border border-gray-300 sm:h-[260px] sm:w-[260px]"
      />
      <div className="mt-[-80px] flex w-full flex-col items-center rounded-xl border border-gray-300 bg-light-300 px-6 pb-6 pt-[100px] text-center dark:bg-gray-400 sm:mt-[-130px] sm:px-10 sm:pb-10 sm:pt-[160px]">
        <p className="text-4xl sm:text-6xl">{user.name}</p>
        <p className="mt-3 text-xl sm:mt-6 sm:text-2xl">{user.email}</p>
      </div>
    </main>
  );
}
