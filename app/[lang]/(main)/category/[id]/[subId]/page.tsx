import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import ProductCard from "@/module/(main)/product/components/ProductCard";
import {
  getCategories,
  getCategoryById,
  getCategoryProducts,
  getRanksByCategoryId,
} from "../../services";
import SubCategoriesList from "@/module/(main)/category/components/Categories/SubCategoriesList";
import { Locale } from "../../../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import { cookies } from "next/headers";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Suspense } from "react";
import CategoryProductSkeleton from "@/components/Skeletons/CategoryProductSkeleton";
import CategoryProducts from "../../components/Categories/CategoryProducts";
import Loader from "@/components/Loader";
import SellectItem from "../../components/Categories/SellectItem";

export default async function SubCategoriesPage({
  params,
  searchParams: { supplier },
}: {
  params: { id: string; subId: string; lang: Locale };
  searchParams: { supplier: string };
}) {
  const category = await getCategoryById(params.id);

  const ranks = await getRanksByCategoryId(params.subId);

  const products = await getCategoryProducts(params.subId);

  const dict = await getDictionary(params.lang);

  const cookie = cookies();
  const isVip = cookie.get("isVIP")?.value;

  const categories = await getCategories();

  const Links =
    categories && Array.isArray(categories.data)
      ? categories.data
          .map((i) => {
            const subCate = i.children.find((sub) => sub._id === params.subId);
            if (subCate) {
              return [
                {
                  label: i.name,
                  link: "/category/" + params.id + "/" + subCate._id,
                },
                {
                  label: subCate.name,
                  link: "/category/" + params.id + "/" + subCate._id,
                },
              ];
            }
          })
          .filter((item) => item)
      : [];

  console.log("products", products);

  return (
    <>
      {/* <Navbar supplierId={supplier} title={category.name} />
      <Container>
        <div>
          <SubCategoriesList
            id={params.id}
            subId={params.subId}
            category={category}
          />
          <div className="py-4">
            <div>
              <div className="flex gap-3 mb-4">
                {ranks &&
                  ranks.data &&
                  ranks.data.map(({ _id, name }) => (
                    <a
                      key={_id}
                      href={`#${_id}`}
                      className="bg-primary-soft text-sm  rounded-full py-1 w-full !text-primary text-center"
                    >
                      {name}
                    </a>
                  ))}
              </div>
              {ranks &&
                ranks.data &&
                ranks.data.map(({ _id, name }) => (
                  <div key={_id} id={_id}>
                    <div className="bg-white shadow-sm w-fit text-sm px-2 py-1 rounded-full mb-3 mx-auto text-primary">
                      {name}
                    </div>

                    <div className="grid md:grid-cols-4 grid-cols-2 gap-2 items-stretch">
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
                              />
                            ))
                        : "No results"}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Container> */}

      <div className="py-5 bg-[#FCFCFC]">
        <Container>
          <div className="lg:grid lg:grid-cols-5 lg:gap-8 items-start">
            <div className="sticky top-20 hidden lg:block col-span-1 h-auto ">
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
                <h1 className="text-xl md:text-3xl font-semibold ">
                  {translate(dict, dict.categories)}
                </h1>
                <Breadcrumbs items={Links[0] ? Links[0] : []} />
              </div>
              <div>
                <Suspense fallback={<CategoryProductSkeleton />}>
                  {/* @ts-ignore */}
                  {
                    /* @ts-ignore */
                    <CategoryProducts
                      // selectedCategory={selectedItem}
                      // searchParams={params}
                      id={params.subId}
                    />
                  }
                </Suspense>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
