"use client";
import Link from "next/link";
import { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import SwitchThemeButton from "./parts/SwitchThemeButton";
import AuthButtons from "./parts/AuthButtons";
import Logo from "./parts/Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky left-0 right-0 top-0 z-30 w-full border-b border-gray-300 px-5 py-3 dark:bg-gray-500">
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-4">
        <Logo className="z-50" />
        <nav
          className={`fixed top-0 z-40 flex h-full w-full flex-col items-center justify-center bg-white transition-all duration-300 dark:bg-gray-500 lg:static lg:flex-[1_1_auto] lg:flex-row lg:justify-between lg:transition-none ${isMenuOpen ? "pointer-events-auto visible left-0" : "pointer-events-none invisible left-[100%] lg:pointer-events-auto lg:visible"}`}
        >
          <ul className="flex flex-col items-center gap-5 rounded-md border border-gray-300 bg-white px-10 py-5 dark:bg-gray-500 lg:mx-auto lg:flex-row lg:gap-10 lg:rounded-full lg:py-2">
            <li>
              <Link
                href="/"
                className="text-gray-400 dark:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-400 dark:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </li>
          </ul>
          <AuthButtons className="mt-8 lg:flex-row" />
        </nav>
        <div className="flex gap-4">
          <SwitchThemeButton className="z-50" />
          <button
            className="z-50 rounded-md border border-gray-300 p-2 text-gray-400 dark:bg-gray-500 dark:text-white lg:hidden"
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            <CgMenuLeftAlt size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
