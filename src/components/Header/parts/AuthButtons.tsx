import LinkButton from "@/components/UI/LinkButton/LinkButton";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function AuthButtons({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-4 lg:mt-0 ${className}`}>
      <LinkButton to="/login" icon={AiOutlineLogin}>
        Login
      </LinkButton>
      <LinkButton to="/login" icon={AiOutlineUserAdd}>
        Sign Up
      </LinkButton>
    </div>
  );
}
