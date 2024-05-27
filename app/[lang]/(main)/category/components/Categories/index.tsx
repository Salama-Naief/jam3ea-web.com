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
}: CategoriesProps) {
  const categories = await getCategories(supplierId);

  const categorySlider1 = categories
    ? categories.data.slice(0, categories.data.length / 2)
    : [];
  const categorySlider2 = categories
    ? categories.data.slice(categories.data.length / 2, categories.data.length)
    : [];

  return (
    <>
      <MainSlider lgSize={5} mdSize={4} xlSize={6} smSize={3} rtl={rtl}>
        {categories &&
          categorySlider1.map(({ _id, name, picture, children }, i) => {
            if (limit && i >= limit) return;
            return (
              <CategoryCard
                key={_id}
                imageSrc={picture}
                link={
                  `/category?id=${children.length > 0 ? children[0]._id : _id}`
                  //supplierId && children.length === 1 ? children[0].id : id,
                  //supplierId && children.length === 1 ? children[0].id : id,
                  // supplierId
                }
                title={name}
              />
            );
          })}
      </MainSlider>
      <MainSlider lgSize={5} mdSize={4} xlSize={6} smSize={3} rtl={rtl}>
        {categories &&
          categorySlider2.map(({ _id, name, picture, children }, i) => {
            if (limit && i >= limit) return;
            return (
              <CategoryCard
                key={_id}
                imageSrc={picture}
                link={
                  `/category?id=${children.length > 0 ? children[0]._id : _id}`
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
