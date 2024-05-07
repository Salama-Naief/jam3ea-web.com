import Container from "@/components/Container";
import Loader from "@/components/Loader";
import React, { Suspense } from "react";
import { products, subCategories } from "../../../../dummyData";
import SellectItem from "./components/Categories/SellectItem";
import ProductCard from "../product/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";

function Category() {
  const Links = [
    {
      label: "Fruit & Veg",
      link: "/",
    },
    {
      label: "Fresh Fruit",
      link: "/",
    },
  ];
  return (
    <div className="py-5">
      <Container>
        <div className="grid grid-cols-5 gap-8 items-start">
          <div className="col-span-1 h-auto ">
            <Suspense fallback={<Loader />}>
              {subCategories.map((item: any) => (
                <SellectItem item={item} key={item.id} />
              ))}
            </Suspense>
          </div>
          <div className="col-span-4">
            <div className="mb-4">
              <h1 className="text-xl md:text-3xl font-semibold ">Categories</h1>
              <Breadcrumbs items={Links} />
            </div>
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
              <Suspense>
                {products.map((product) => (
                  <div key={product.id}>
                    <ProductCard
                      cartStatus={product.cartStatus}
                      currency={product.currency}
                      hasVariants={product.hasVariants}
                      isAvailable={product.isAvailable}
                      isInWhishlist={product.isInWhishlist}
                      name={product.name}
                      picture={product.picture}
                      price={product.price}
                      oldPrice={product.oldPrice}
                      sku={product.sku}
                      type="normal"
                      maxQuantityCart={product.maxQuantityCart}
                      className="w-full"
                    />
                  </div>
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Category;
