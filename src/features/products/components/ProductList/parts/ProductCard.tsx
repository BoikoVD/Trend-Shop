import Image from "next/image";
import Button from "@/components/UI/Button/Button";
import { Product } from "../../../schemas/schemas";

interface IProps {
  productData: Product;
}

export function ProductCard({ productData }: IProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-300 bg-white p-6 dark:bg-gray-500">
      <Image
        src={productData.images[0]}
        alt={`${productData.title} image`}
        width={400}
        height={400}
        className="h-[280px] self-center rounded-xl object-cover"
      />
      <div className="flex-[1_1_auto]">
        <h4 className="mt-6 text-xl">{productData.title}</h4>
        <p className="mt-4 line-clamp-2 text-sm text-gray-50">
          {productData.description}
        </p>
        <div className="mt-4 flex">
          <div className="flex rounded-full border border-gray-300 bg-white px-3 py-1 dark:bg-gray-500">
            {productData.category.name}
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-50">Price:</p>
          <p className="text-2xl">{`$ ${productData.price}`}</p>
        </div>
        <Button size="small">Add To Cart</Button>
      </div>
    </div>
  );
}
