"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { AiOutlineMoon } from "react-icons/ai";

export default function SwitchThemeButton({
  className
}: {
  className?: string;
}) {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useLayoutEffect(() => {
    const localStorageTheme = localStorage.theme as
      | "light"
      | "dark"
      | undefined;

    if (localStorageTheme) {
      if (localStorageTheme === "dark") {
        setDarkTheme(true);
      }
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkTheme(true);
      }
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <button
      className={`rounded-md border border-gray-300 p-2 text-gray-400 dark:bg-gray-500 dark:text-white ${className}`}
      onClick={() => {
        setDarkTheme(prev => !prev);
      }}
    >
      {darkTheme ? <AiOutlineMoon size={18} /> : <AiOutlineSun size={18} />}
    </button>
  );
}
