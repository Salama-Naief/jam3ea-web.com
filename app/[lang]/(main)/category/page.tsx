import Container from "@/components/Container";
import Loader from "@/components/Loader";
import React, { Suspense } from "react";
import { category, subCategories } from "../../../../dummyData";
import SellectItem from "./components/Categories/SellectItem";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getCategories, getCategoryProducts } from "./services";
import { useSearchParams } from "next/navigation";
import CategoryProducts from "./components/Categories/CategoryProducts";
import CategoryProductSkeleton from "@/components/Skeletons/CategoryProductSkeleton";

async function Category({ searchParams }: { searchParams: any }) {
  const categories = await getCategories();
  // const products = await getCategoryProducts(
  //   searchParams["id"],
  //   20,
  //   searchParams["skip"]
  // );
  //const searchParams = useSearchParams();

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
  const selectedItem =
    categories &&
    categories.data.find((i) => {
      if (i._id === searchParams["id"]) {
        return i;
      } else {
        return i.children.find((sub) => sub._id === searchParams["id"]);
      }
    });
  return (
    <div className="py-5 bg-[#FCFCFC]">
      <Container>
        <div className="lg:grid lg:grid-cols-5 lg:gap-8 items-start">
          <div className="hidden lg:block col-span-1 h-auto ">
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
              <Suspense fallback={<CategoryProductSkeleton />}>
                {/* @ts-ignore */}
                {
                  /* @ts-ignore */
                  <CategoryProducts
                    selectedCategory={selectedItem}
                    searchParams={searchParams}
                  />
                }
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Category;
