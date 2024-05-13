import Container from "@/components/Container";
import Loader from "@/components/Loader";
import React, { Suspense } from "react";
import { category, subCategories } from "../../../../dummyData";
import SellectItem from "./components/Categories/SellectItem";
import ProductCard from "../product/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getCategories, getCategoryProducts } from "./services";
import { useSearchParams } from "next/navigation";
import CategoryProducts from "./components/Categories/CategoryProducts";

async function Category({ searchParams }: { searchParams: any }) {
  const categories = await getCategories();
  const products = await getCategoryProducts(
    searchParams["id"],
    12,
    searchParams["skip"]
  );
  //const searchParams = useSearchParams();
  console.log("searchParams", searchParams);

  const Links =
    categories && Array.isArray(categories.data)
      ? categories.data
          .map((i) => {
            const subCate = i.children.find(
              (sub) => sub._id === searchParams["id"]
            );
            if (subCate) {
              return [
                {
                  label: i.name,
                  link: "/category?id=" + subCate._id,
                },
                { label: subCate.name, link: "/category?id=" + subCate._id },
              ];
            }
          })
          .filter((item) => item)
      : [];

  // const Links = [
  //   {
  //     label: "Fruit & Veg",
  //     link: "/",
  //   },
  //   {
  //     label: "Fresh Fruit",
  //     link: "/",
  //   },
  // ];
  return (
    <div className="py-5 bg-[#FCFCFC]">
      <Container>
        <div className="grid grid-cols-5 gap-8 items-start">
          <div className="col-span-1 h-auto ">
            <Suspense fallback={<Loader />}>
              {categories &&
                categories.data &&
                Array.isArray(categories.data) &&
                categories.data.map((item) => (
                  <SellectItem item={item} key={item._id} />
                ))}
            </Suspense>
          </div>
          <div className="col-span-4">
            <div className="mb-4">
              <h1 className="text-xl md:text-3xl font-semibold ">Categories</h1>
              <Breadcrumbs items={Links[0] ? Links[0] : []} />
            </div>
            <div>
              <Suspense fallback={<Loader />}>
                {products && <CategoryProducts products={products} />}
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Category;
