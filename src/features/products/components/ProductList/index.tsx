import { Products } from "../../schemas/schemas";
import { ProductCard } from "./parts/ProductCard";

interface IProps {
  products: Products;
  className?: string;
}

export function ProductList({ products, className }: IProps) {
  return (
    <ul
      className={`grid flex-[1_1_auto] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {products.map(product => (
        <li className="h-full" key={product.id}>
          <ProductCard productData={product} />
        </li>
      ))}
    </ul>
  );
}
