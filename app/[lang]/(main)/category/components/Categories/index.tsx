import CategoryCard from "./CategoryCard";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { getCategories } from "@/module/(main)/category/services";
import webRoutes from "@/lib/utils/webRoutes";
import { categories } from "../../../../../../dummyData";
import MainSlider from "@/components/Slider";
import { ICategory } from "../../types";

interface CategoriesProps {
  limit?: number;
  selectedCategoryId?: string;
  dictionary: {
    all_sections: string;
  };
  supplierId?: string;
  rtl?: boolean;
}

export default async function Categories({
  limit,
  dictionary,
  supplierId,
  rtl,
  selectedCategoryId,
}: CategoriesProps) {
  const categories = await getCategories(supplierId);
  console.log("categories======...", categories);
  const categorySlider1 =
    categories && Array.isArray(categories.data) && categories.data
      ? categories.data.length < 12
        ? categories.data
        : categories.data.slice(0, categories.data.length / 2)
      : [];
  const categorySlider2 =
    categories && Array.isArray(categories.data) && categories.data.length > 12
      ? categories.data.slice(
          categories.data.length / 2,
          categories.data.length
        )
      : [];

  return (
    <>
      <MainSlider
        // lgSize={categorySlider1.length > 5 ? 5 : categorySlider1.length}
        // mdSize={categorySlider1.length > 4 ? 4 : categorySlider1.length}
        // xlSize={categorySlider1.length > 6 ? 6 : categorySlider1.length}
        // smSize={categorySlider1.length > 3 ? 3 : categorySlider1.length}
        lgSize={6}
        mdSize={4}
        xlSize={7}
        smSize={3}
        rtl={rtl}
      >
        {categories &&
          categorySlider1.map(({ _id, name, picture, children }, i) => {
            if (limit && i >= limit) return;
            return (
              <CategoryCard
                selectedCategory={selectedCategoryId === _id}
                key={_id}
                imageSrc={picture}
                link={
                  supplierId
                    ? `/stores/${supplierId}/products/${
                        children.length > 0 ? children[0]._id : _id
                      }`
                    : children.length > 0
                    ? `/category/${_id}/${children[0]._id}`
                    : `/categroy/${_id}`
                  //supplierId && children.length === 1 ? children[0].id : id,
                  //supplierId && children.length === 1 ? children[0].id : id,
                  // supplierId
                }
                title={name}
              />
            );
          })}
      </MainSlider>
      <MainSlider
        lgSize={categorySlider2.length > 5 ? 5 : categorySlider1.length}
        mdSize={categorySlider2.length > 4 ? 4 : categorySlider1.length}
        xlSize={categorySlider2.length > 6 ? 6 : categorySlider1.length}
        smSize={categorySlider2.length > 3 ? 3 : categorySlider1.length}
      >
        {categories &&
          categorySlider2.map(({ _id, name, picture, children }, i) => {
            if (limit && i >= limit) return;
            return (
              <CategoryCard
                key={_id}
                imageSrc={picture}
                link={
                  supplierId
                    ? `/stores/${supplierId}/products/${
                        children.length > 0 ? children[0]._id : _id
                      }`
                    : children.length > 0
                    ? `/category/${_id}/${children[0]._id}`
                    : `/categroy/${_id}`
                  //supplierId && children.length === 1 ? children[0].id : id,
                  //supplierId && children.length === 1 ? children[0].id : id,
                  // supplierId
                }
                title={name}
              />
            );
          })}
      </MainSlider>
      {/* {categories && limit && limit < categories.count && (
          <button className="flex items-center flex-col gap-1">
            <div className="bg-white shadow-sm rounded-3xl p-3 w-full min-h-[74px] max-h-[74px] h-full flex items-center justify-center overflow-hidden">
              <img
                className="h-auto max-w-full"
                src="/assets/all-sections-icon.svg"
                alt=""
              />
            </div>
            <button type='button' className="text-xs">{dictionary.all_sections}</button>
          </button>
        )} */}
    </>
  );
}
