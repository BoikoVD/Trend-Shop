import LinkButton from "@/components/UI/LinkButton/LinkButton";
import { routes } from "@/constants/routes";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function AuthButtons({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-4 lg:flex-row ${className}`}>
      <LinkButton to={routes.LOGIN} icon={AiOutlineLogin}>
        Login
      </LinkButton>
      <LinkButton to={routes.LOGIN} icon={AiOutlineUserAdd}>
        Sign Up
      </LinkButton>
    </div>
  );
}
