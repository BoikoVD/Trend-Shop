import { Dispatch, SetStateAction } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "@/components/UI/Button/Button";

interface IProps {
  offset: number;
  limit: number;
  productsLength: number;
  setOffset: Dispatch<SetStateAction<number>>;
  disable?: boolean;
}

export function Pagination({
  offset,
  limit,
  productsLength,
  setOffset,
  disable = false
}: IProps) {
  return (
    <div className="mt-6 flex gap-10 sm:mt-10">
      <Button
        color="dark"
        leftIcon={AiOutlineArrowLeft}
        iconSize={20}
        disabled={offset === 0 || disable}
        onClick={() => setOffset(offset - limit)}
        className="disabled:opacity-[0.5]"
      >
        Prev
      </Button>
      <Button
        color="dark"
        rightIcon={AiOutlineArrowRight}
        iconSize={20}
        disabled={productsLength !== limit || disable}
        onClick={() => setOffset(offset + limit)}
        className="disabled:opacity-[0.5]"
      >
        Next
      </Button>
    </div>
  );
}
