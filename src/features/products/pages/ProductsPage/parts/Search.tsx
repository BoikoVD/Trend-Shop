"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDebounce } from "@/hooks/useDebounce";

interface IProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
  className?: string;
}

export function Search({ setSearchQuery, className }: IProps) {
  const [search, setSearch] = useState<string>("");
  const handleSearch = useDebounce(value => {
    setSearchQuery(value);
  }, 500);

  return (
    <div
      className={`relative w-full rounded-xl border border-light-400 bg-white dark:border-gray-300 dark:bg-gray-500 ${className}`}
    >
      <input
        value={search}
        onChange={e => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
        placeholder="Search ..."
        className="w-full rounded-xl bg-transparent py-2 pl-10 pr-4"
      />
      <button
        onClick={() => setSearchQuery(search)}
        className="absolute left-[8px] top-[50%] flex translate-y-[-50%] items-center justify-center rounded-md bg-purple-400 p-1 text-white"
      >
        <AiOutlineSearch size={16} />
      </button>
    </div>
  );
}
