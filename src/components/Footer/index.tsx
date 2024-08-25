import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-4 py-4 md:px-10">
        <p className="text-sm">
          Made by <span className="text-purple-400">BoikoVD</span>
        </p>
        <Link href="https://github.com/BoikoVD/Trend-Shop" target="_blank">
          <FaGithub size={30} />
        </Link>
      </div>
    </footer>
  );
}
