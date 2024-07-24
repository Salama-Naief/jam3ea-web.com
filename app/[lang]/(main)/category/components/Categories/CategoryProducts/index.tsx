import PaginationComp from "@/components/Pagination";
import ProductCard from "@/module/(main)/product/components/ProductCard";
import React from "react";
import { getCategoryProducts, getRanksByCategoryId } from "../../../services";
import { ICategory } from "../../../types";
import MainSlider from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "next/dist/compiled/@vercel/og/satori";
import Ranks from "../Ranks";

interface Props {
  // products: {
  //   total: number;
  //   count: number;
  //   per_page: number | null;
  //   current_page: number | null;
  //   data: IProduct[];
  // };
  // searchParams: any;
  selectedCategory?: ICategory;
  id: string;
  params: { id: string; subId: string; lang: Locale };
  searchParams: { supplier: string; skip: number };
}
async function CategoryProducts({
  searchParams,
  selectedCategory,
  id,
  params,
}: Props) {
  let total = 1;
  const products = await getCategoryProducts(id);
  const ranks = await getRanksByCategoryId(id);
  if (products && products.total && products.per_page) {
    total = Math.ceil(Number(products.total) / Number(products.per_page));
  }

  console.log("ranks=======", ranks);

  return (
    <div className="">
      {/* <div className="my-4">
        {ranks && (
          <MainSlider xlSize={6} lgSize={5} mdSize={4} smSize={3}>
            {ranks &&
              ranks.data &&
              ranks.data.map((item) => (
                <a
                  // href={"category" + "?id=" + item._id}
                  href={`#${item._id}`}
                  key={item._id}
                  className="block"
                  onClick={(event) => handleScroll(event, item._id)}
                >
                  {item.picture && (
                    <div
                      className={`${
                        // item._id === searchParams["id"]
                        // ? "border-primary"
                        // :
                        "border-gray-300"
                      } border-2 p-1 relative w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full shadow-md mx-auto`}
                    >
                      <Image src={item.picture} fill alt={item.name} />
                    </div>
                  )}
                  <div className="md:font-semibold text-center">
                    {item.name}
                  </div>
                </a>
              ))}
          </MainSlider>
        )}
      </div> */}
      <Ranks ranks={ranks} />
      {ranks && ranks.data.length > 0 ? (
        ranks.data.map(({ _id, name }) => (
          <>
            {products && products.data.length > 0 && (
              <div className="bg-white border font-semibold mt-4  px-6 py-2 shadow-sm w-fit rounded-full mb-3 mx-auto text-primary">
                {name}
              </div>
            )}
            <div
              key={_id}
              id={_id}
              className="
            grid 
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-4
            2xl:grid-cols-5
            md:gap-4 lg:gap-6
          "
            >
              {products
                ? products.data
                    .filter(
                      ({ prod_n_categoryArr }) =>
                        prod_n_categoryArr.findIndex(
                          (c) => c.rank_id && c.rank_id === _id
                        ) > -1
                    )
                    .map((product) => (
                      <ProductCard
                        key={product.sku}
                        product={product}
                        type="normal"
                        className="w-full"
                      />
                    ))
                : "No results"}

              {/* {products.data.map((product) => (
              <div key={product.sku}>
              <ProductCard
              product={product}
              type="normal"
              className="w-full"
              />
              </div>
              ))} */}
            </div>
          </>
        ))
      ) : (
        // : (
        //   <div className="w-full flex items-center justify-center mt-16">
        //     No product found
        //   </div>
        // )
        <div
          className="
      grid 
      grid-cols-2
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-4
      2xl:grid-cols-5
      md:gap-4 lg:gap-6
    "
        >
          {products &&
            products.data.map((product) => (
              <div key={product.sku}>
                <ProductCard
                  product={product}
                  type="normal"
                  className="w-full"
                />
              </div>
            ))}
        </div>
      )}
      {/* {products && products.data.length > 0 && (
        <div className="flex items-center justify-center my-8">
          <PaginationComp currentPage={products.current_page} total={total} />
        </div>
      )} */}
    </div>
  );
}

export default CategoryProducts;
