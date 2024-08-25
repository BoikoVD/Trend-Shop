import Image from "next/image";
import Link from "next/link";
import { CiTrash } from "react-icons/ci";
import { CartItem } from "../../../schemas/schemas";
import { routes } from "@/constants/routes";
import { productImageFormatter } from "@/utils/productImageFormatter";

interface IProps {
  cartItem: CartItem;
  removeProduct: (productId: number) => void;
}

export function CartProductItem({ cartItem, removeProduct }: IProps) {
  const imageUrl = productImageFormatter(cartItem.productData.images[0]);

  return (
    <li className="flex items-center gap-2 sm:gap-6">
      <Link href={routes.PRODUCT + "/" + cartItem.productData.id}>
        <Image
          src={imageUrl ?? "/no_image.png"}
          alt={`${cartItem.productData.title} image`}
          width={80}
          height={80}
          className="rounded-xl"
        />
      </Link>
      <div className="flex-[1_1_auto]">
        <Link
          href={routes.PRODUCT + "/" + cartItem.productData.id}
          className="line-clamp-2 text-base sm:text-xl"
        >
          {cartItem.productData.title}
        </Link>
        <p className="mt-2">{`$ ${cartItem.productData.price}`}</p>
      </div>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
        <div className="min-w-[50px] rounded-md border border-gray-300 px-2 py-1 text-center">
          {cartItem.amount}
        </div>
        <button
          onClick={() => removeProduct(cartItem.productData.id)}
          className="rounded-md border border-gray-300 p-2 dark:bg-gray-500"
        >
          <CiTrash size={18} />
        </button>
      </div>
    </li>
  );
}
