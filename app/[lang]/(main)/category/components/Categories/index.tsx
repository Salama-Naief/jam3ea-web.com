import CategoryCard from "./CategoryCard";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { getCategories } from "@/module/(main)/category/services";
import webRoutes from "@/lib/utils/webRoutes";

interface CategoriesProps {
  limit?: number;
  dictionary: {
    all_sections: string;
  };
  supplierId?: string;
}

export default async function Categories({
  limit,
  dictionary,
  supplierId,
}: CategoriesProps) {
  const categories = await getCategories(supplierId);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {categories &&
          categories.data &&
          categories.data.map(({ _id, name, picture, children }, i) => {
            if (limit && i >= limit) return;
            return (
              <CategoryCard
                key={_id}
                imageSrc={picture}
                link={webRoutes.category(
                  supplierId && children.length === 1 ? children[0]._id : _id,
                  supplierId
                )}
                title={name}
              />
            );
          })}
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
