import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`text-3xl lg:text-5xl ${className}`}>
      TrendShop
    </Link>
  );
}
