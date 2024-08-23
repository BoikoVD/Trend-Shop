import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

interface ILinkButton {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
  color?: "primary" | "dark";
  size?: "small" | "medium";
  icon?: IconType;
  disabled?: boolean;
  className?: string;
}

const styles = {
  // color
  primary: "bg-purple-400",
  dark: "bg-gray-200",

  // size
  small: "px-3 py-1 text-base",
  medium: "px-3 py-2 text-xl"
};

export default function Button(props: ILinkButton) {
  const {
    children,
    onClick,
    type = "button",
    color = "primary",
    size = "medium",
    icon: Icon,
    disabled = false,
    className
  } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`rounded-xl text-white ${styles[size]} ${styles[color]} ${className}`}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}
