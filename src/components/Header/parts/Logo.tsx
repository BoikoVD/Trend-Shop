import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`text-2xl font-extrabold xs:text-3xl lg:text-5xl ${className}`}
    >
      TrendShop
    </Link>
  );
}
