import PaginationComp from "@/components/Pagination";
import {
  getCategoryProducts,
  getCategoryProductsStore,
} from "@/module/(main)/category/services";
import { ICategory } from "@/module/(main)/category/types";
import ProductCard from "@/module/(main)/product/components/ProductCard";
import React from "react";

interface Props {
  supplierId: string;
  categoryId: string;
  limit: number;
  skip: number;
  category: ICategory;
}
async function StoreProducts({
  categoryId,
  limit,
  skip,
  supplierId,
  category,
}: Props) {
  const products = await getCategoryProductsStore(supplierId, categoryId);
  return (
    <div className="bg-gray-50 p-2 md:p-4 lg:p-6">
      {category && (
        <div className="flex justify-between items-center my-4 md:my-6">
          <h3 className="text-xl font-bold">{category.name}</h3>
        </div>
      )}

      {products && products.data && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 lg:grid-cols-5 xl:grid-cols-5">
          {products.data.map((product) => (
            <ProductCard key={product.sku} product={product} type="normal" />
          ))}
        </div>
      )}
    </div>
  );
}

export default StoreProducts;
