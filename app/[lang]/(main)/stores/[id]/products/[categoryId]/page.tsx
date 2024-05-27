import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { Locale } from "../../../../../../../i18n-config";
import { getSupplierById } from "../../../services";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import Categories from "@/module/(main)/category/components/Categories";
import { getFeaturedProducts } from "@/module/(main)/feature/services";
import { Suspense } from "react";
import { IFeature } from "@/module/(main)/feature/types";
import Feature from "@/module/(main)/feature/components/Feature";

import { Loader } from "@mantine/core";
import StoreProducts from "../../../conponents/StoreProducts";
import { number } from "yup";
import { getCategoryById } from "@/module/(main)/category/services";

export default async function StorePage({
  params,
}: {
  params: {
    lang: Locale;
    id: string;
    categoryId: string;
    skip: number;
    limit: number;
  };
}) {
  const dict = await getDictionary(params.lang);
  const supplier = await getSupplierById(params.id);
  //   const features = await getFeaturedProducts(params.id);
  const category = await getCategoryById(params.categoryId);
  return (
    <div>
      <Container>
        {supplier && (
          <div className="text-2xl text-secondary my-6 font-bold">
            {typeof supplier.name === "object"
              ? params.lang === "ar"
                ? supplier.name.ar
                : supplier.name.en
              : supplier.name}
          </div>
        )}
        <h2 className="font-bold text-lg">{translate(dict, "sections")}</h2>
        <div className="">
          {/* @ts-expect-error Server Component */}
          <Categories
            dictionary={{ all_sections: translate(dict, "all_sections") }}
            supplierId={params.id}
            selectedCategoryId={category ? category._id : undefined}
          />
        </div>
        <Suspense fallback={<Loader color="orange" />}>
          {/* @ts-expect-error Server Component */}
          <StoreProducts
            supplierId={params.id}
            categoryId={params.categoryId}
            limit={Number(params.limit) || 15}
            skip={Number(params.skip) || 1}
            category={category}
          />
        </Suspense>
      </Container>
    </div>
  );
}
