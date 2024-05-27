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
  // let total = 0;
  // if (products && products.total && products.per_page) {
  //   total = Math.ceil(Number(products.total) / Number(products.per_page));
  // }
  // const path = `/stores/${supplierId}/products/${categoryId}?limit=15`;
  // console.log("total,currentpage", total, products && products.current_page);
  return (
    <div className="bg-gray-100 p-6">
      {category && (
        <div className="flex justify-between items-center my-6">
          <h3 className="text-xl font-bold">{category.name}</h3>
        </div>
      )}

      {products && products.data && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-5 xl:grid-cols-5">
          {products.data.map((product) => (
            <ProductCard
              key={product.sku}
              cartStatus={product.cart_status}
              currency="Kwd"
              hasVariants={product.has_variants}
              isAvailable={product.availability}
              isInWhishlist={product.wishlist_status.is_exists}
              maxQuantityCart={product.max_quantity_cart}
              name={product.name}
              picture={product.picture}
              price={product.price}
              sku={product.sku}
              oldPrice={product.old_price}
              type="normal"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default StoreProducts;
