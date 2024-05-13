import PaginationComp from "@/components/Pagination";
import ProductCard from "@/module/(main)/product/components/ProductCard";
import { IProduct } from "@/module/(main)/product/types";
import React from "react";

interface Props {
  products: {
    total: number;
    count: number;
    per_page: number | null;
    current_page: number | null;
    data: IProduct[];
  };
}
function CategoryProducts({ products }: Props) {
  let total = 1;
  console.log("products.total", products);

  if (products && products.total && products.per_page) {
    total = Math.ceil(Number(products.total) / Number(products.per_page));
  }
  return (
    <div className="ddd">
      {products && products.data && products.data.length >= 1 ? (
        <div
          className="
    grid 
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-4
    2xl:grid-cols-5
    gap-6
      "
        >
          {products.data.map((product) => (
            <div key={product.sku}>
              <ProductCard
                cartStatus={product.cart_status}
                currency={"kwd"}
                hasVariants={product.has_variants}
                isAvailable={product.availability}
                isInWhishlist={product.wishlist_status.is_exists}
                name={product.name}
                picture={product.picture}
                price={product.price}
                oldPrice={product.old_price}
                sku={product.sku}
                type="normal"
                maxQuantityCart={product.max_quantity_cart}
                className="w-full"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center justify-center mt-16">
          No product found
        </div>
      )}
      {products && products.data.length > 0 && (
        <div className="flex items-center justify-center my-8">
          <PaginationComp currentPage={products.current_page} total={total} />
        </div>
      )}
    </div>
  );
}

export default CategoryProducts;
