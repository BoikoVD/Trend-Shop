import Link from "next/link";
import { IconType } from "react-icons";

interface ILinkButton {
  children: React.ReactNode;
  to: string;
  size?: "small" | "medium";
  color?: "primary" | "theme" | "gray";
  icon?: IconType;
  className?: string;
}

const styles = {
  // Size
  small: "p-1",
  medium: "px-3 py-2 text-lg",

  // Color
  primary: "bg-purple-400",
  gray: "bg-gray-200",
  theme: "border border-gray-200 bg-white dark:bg-gray-400"
};

export default function LinkButton(props: ILinkButton) {
  const {
    children,
    to,
    size = "small",
    color = "theme",
    icon: Icon,
    className
  } = props;

  return (
    <Link
      href={to}
      className={`flex items-center justify-center gap-2 rounded-md ${styles[color]} ${styles[size]} ${className}`}
    >
      {Icon && <Icon size={16} />}
      {children}
    </Link>
  );
}
