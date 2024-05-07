import CategoryCard from "./CategoryCard";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { getCategories } from "@/module/(main)/category/services";
import webRoutes from "@/lib/utils/webRoutes";
import { categories } from "../../../../../../dummyData";
import MainSlider from "@/components/Slider";

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
  //const categories = await getCategories(supplierId);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <MainSlider lgSize={5} mdSize={4} xlSize={6} smSize={3} rtl={rtl}>
          {categories &&
            categories.map(({ id, name, image, children }, i) => {
              if (limit && i >= limit) return;
              return (
                <CategoryCard
                  key={id}
                  imageSrc={image}
                  link={webRoutes.category(
                    `${id}`
                    //supplierId && children.length === 1 ? children[0].id : id,
                    //supplierId && children.length === 1 ? children[0].id : id,
                    // supplierId
                  )}
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
      </Suspense>
    </>
  );
}
