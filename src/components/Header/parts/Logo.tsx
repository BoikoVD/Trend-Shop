import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`text-3xl text-gray-400 lg:text-5xl dark:text-white ${className}`}
    >
      TrendShop
    </Link>
  );
}
