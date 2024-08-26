import { getProduct } from "../../api/api";
import { Images } from "./parts/Images";
import { BackButton } from "./parts/BackButton";
import { AddToCartButton } from "../../components/AddToCartButton";

export async function ProductPage({ id }: { id: string }) {
  const product = await getProduct({ id });

  return (
    <main className="container flex min-h-screen items-center justify-center">
      <div className="relative flex w-full flex-col gap-10 rounded-xl border border-light-400 px-5 pb-10 pt-20 dark:border-gray-300 dark:bg-gray-400 sm:px-10 sm:py-20 lg:flex-row lg:items-center">
        <BackButton className="absolute left-5 top-5 sm:left-10" />
        <Images images={product.images} className="" />
        <div className="flex-[1_1_auto]">
          <h1 className="text-2xl sm:text-3xl">{product.title}</h1>
          <div className="mt-4 flex">
            <div className="flex rounded-full border border-gray-300 bg-white px-3 py-1 text-sm dark:bg-gray-500">
              {product.category.name}
            </div>
          </div>
          <p className="mt-4 text-base text-gray-50 sm:mt-10 sm:text-xl">
            {product.description}
          </p>
          <div className="mt-6 flex items-center justify-between sm:mt-10">
            <div>
              <p className="text-xs text-gray-50 sm:text-sm">Price:</p>
              <p className="text-xl sm:text-3xl">{`$ ${product.price}`}</p>
            </div>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}
