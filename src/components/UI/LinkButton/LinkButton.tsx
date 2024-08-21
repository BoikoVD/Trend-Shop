import Link from "next/link";
import { IconType } from "react-icons";

interface ILinkButton {
  children: React.ReactNode;
  to: string;
  icon?: IconType;
  className?: string;
}

export default function LinkButton(props: ILinkButton) {
  const { children, to, icon: Icon, className } = props;

  return (
    <Link
      href={to}
      className={`flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white p-1 dark:bg-gray-400 ${className}`}
    >
      {Icon && <Icon size={16} />}
      {children}
    </Link>
  );
}
