import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

interface ILinkButton {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
  color?: "primary" | "dark";
  icon?: IconType;
  disabled?: boolean;
  className?: string;
}

const styles = {
  // color
  primary: "bg-purple-400",
  dark: "bg-gray-200"
};

export default function Button(props: ILinkButton) {
  const {
    children,
    onClick,
    type = "button",
    color = "primary",
    icon: Icon,
    disabled = false,
    className
  } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`min-w-[150px] rounded-xl px-3 py-2 text-xl text-white sm:min-w-[280px] ${styles[color]} ${className}`}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}
