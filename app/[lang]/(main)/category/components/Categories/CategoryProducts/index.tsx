import PaginationComp from "@/components/Pagination";
import ProductCard from "@/module/(main)/product/components/ProductCard";
import { IProduct } from "@/module/(main)/product/types";
import React from "react";
import { getCategoryProducts } from "../../../services";
import { cookies } from "next/headers";

interface Props {
  // products: {
  //   total: number;
  //   count: number;
  //   per_page: number | null;
  //   current_page: number | null;
  //   data: IProduct[];
  // };
  searchParams: any;
}
async function CategoryProducts({ searchParams }: Props) {
  let total = 1;
  const products = await getCategoryProducts(
    searchParams["id"],
    20,
    searchParams["skip"]
  );
  const cookie = cookies();
  const isVip = cookie.get("isVIP")?.value;

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
              <ProductCard product={product} type="normal" className="w-full" />
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
