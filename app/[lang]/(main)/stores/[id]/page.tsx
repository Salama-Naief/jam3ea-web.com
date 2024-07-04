import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { Locale } from "../../../../../i18n-config";
import { getSupplierById } from "../services";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import Categories from "@/module/(main)/category/components/Categories";
import { getFeaturedProducts } from "@/module/(main)/feature/services";
import { Suspense } from "react";
import { IFeature } from "@/module/(main)/feature/types";
import Feature from "@/module/(main)/feature/components/Feature";
import Supplier from "../conponents/Supplier";
import { Loader } from "@mantine/core";

export default async function StorePage({
  params,
}: {
  params: { lang: Locale; id: string };
}) {
  const dict = await getDictionary(params.lang);
  const supplier = await getSupplierById(params.id);
  const features = await getFeaturedProducts(params.id);

  return (
    <div>
      <Container>
        <Suspense
          fallback={
            <div className="flex items-center justify-start w-full h-20">
              <Loader color="orange" />
            </div>
          }
        >
          {/* @ts-expect-error Server Component */}
          <Supplier lang={params.lang} supplierId={params.id} />
        </Suspense>
        <h2 className="font-bold text-lg">{translate(dict, "sections")}</h2>
        <div className="">
          {/* @ts-expect-error Server Component */}
          <Categories
            dictionary={{ all_sections: translate(dict, "all_sections") }}
            supplierId={params.id}
          />
        </div>
        {features &&
          features.map((feature: IFeature) => (
            <Feature
              key={feature._id}
              feature={feature}
              title="start"
              supplierId={params.id}
              dictionary={{
                view_all: translate(dict, "view_all"),
                currency: translate(dict, "currency"),
              }}
              productType="normal"
            />
          ))}
      </Container>
    </div>
  );
}
