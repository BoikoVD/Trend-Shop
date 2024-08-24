import Image from "next/image";
import Button from "@/components/UI/Button/Button";
import { Product } from "../../../schemas/schemas";

interface IProps {
  productData: Product;
}

export function ProductCard({ productData }: IProps) {
  // The Platzi API is an open source API and the data can be updated by any developer, so we need to make sure that the image URL is in the correct format
  const imageUrl = productData.images[0].substring(
    productData.images[0].indexOf("http"),
    productData.images[0].lastIndexOf("jpeg") + 4
  );
  if (!imageUrl.includes("i.imgur.com")) {
    return null;
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-300 bg-white p-6 dark:bg-gray-500">
      <Image
        src={imageUrl}
        alt={`${productData.title} image`}
        width={400}
        height={400}
        priority
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
