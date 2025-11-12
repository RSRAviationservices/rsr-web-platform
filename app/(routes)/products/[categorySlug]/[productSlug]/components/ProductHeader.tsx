import { Category, Product } from "@/app/types/category";

interface ProductHeaderProps {
  product: Product;
  category: Category;
}

export function ProductHeader({ product, category }: ProductHeaderProps) {
  return (
    <div>
      <p className="font-semibold text-primary">{product.brand}</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        {product.name}
      </h1>
      <div className="mt-2 flex items-center gap-x-4">
        <p className="text-zinc-500">{product.partNumber}</p>
        <span className="h-1 w-1 rounded-full bg-zinc-300" />
        <p className="text-zinc-500">{category.name}</p>
      </div>
    </div>
  );
}
