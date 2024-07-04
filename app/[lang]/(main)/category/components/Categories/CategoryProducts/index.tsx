import PaginationComp from "@/components/Pagination";
import ProductCard from "@/module/(main)/product/components/ProductCard";
import React from "react";
import { getCategoryProducts } from "../../../services";
import { ICategory } from "../../../types";
import MainSlider from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";

interface Props {
  // products: {
  //   total: number;
  //   count: number;
  //   per_page: number | null;
  //   current_page: number | null;
  //   data: IProduct[];
  // };
  searchParams: any;
  selectedCategory?: ICategory;
}
async function CategoryProducts({ searchParams, selectedCategory }: Props) {
  let total = 1;
  const products = await getCategoryProducts(
    searchParams["id"],
    20,
    searchParams["skip"]
  );

  if (products && products.total && products.per_page) {
    total = Math.ceil(Number(products.total) / Number(products.per_page));
  }
  return (
    <div className="">
      <div className="my-4">
        {selectedCategory && (
          <MainSlider xlSize={6} lgSize={5} mdSize={4} smSize={3}>
            {selectedCategory.children.map((item) => (
              <Link
                href={"category" + "?id=" + item._id}
                key={item._id}
                className="block"
              >
                {item.picture && (
                  <div
                    className={`${
                      item._id === searchParams["id"]
                        ? "border-primary"
                        : "border-gray-300"
                    } border-2 p-1 relative w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full shadow-md mx-auto`}
                  >
                    <Image src={item.picture} fill alt={item.name} />
                  </div>
                )}
                <div className="md:font-semibold text-center">{item.name}</div>
              </Link>
            ))}
          </MainSlider>
        )}
      </div>
      {products && products.data && products.data.length >= 1 ? (
        <div
          className="
    grid 
    grid-cols-2
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
