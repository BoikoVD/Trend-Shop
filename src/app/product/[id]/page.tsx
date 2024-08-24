import { ProductPage } from "@/features/products";

export default function Product({ params }: { params: { id: string } }) {
  return <ProductPage id={params.id} />;
}
