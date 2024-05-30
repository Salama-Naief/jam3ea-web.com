import Container from "@/components/Container";
import Categories from "@/module/(main)/category/components/Categories";
import { Suspense } from "react";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import Carousel from "@/components/Carousel";
import { storeCards } from "../../../dummyData";
import StoreCard from "@/components/StoreCard";

import FeatureServer from "./feature/components/FeatureServer";
import SliderSkeleton from "@/components/Skeletons/SliderSkeleton";
import { Loader } from "@mantine/core";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <Carousel />

      <div className="h-fit my-8">
        <Container>
          <div className="lg:grid lg:grid-cols-3 gap-6 px-16 items-stretch">
            {storeCards.map((item) => (
              <div key={item.id} className="w-full h-fit">
                <StoreCard
                  name={item.name}
                  image={item.image}
                  label={item.label}
                  link={item.link}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className="font-bold text-2xl md:text-3xl lg:text-4xl my-6 capitalize text-center text-primary">
        {translate(dict, "categories")}
      </div>
      <div className="">
        <Container>
          <Suspense fallback={<Loader color="orange" />}>
            {/* @ts-expect-error Server Component */}
            <Categories
              dictionary={{ all_sections: translate(dict, "all_sections") }}
            />
          </Suspense>
        </Container>
      </div>
      <div>
        <Container>
          <Suspense fallback={<SliderSkeleton />}>
            {/* @ts-expect-error Server Component */}
            <FeatureServer home={true} />
          </Suspense>
        </Container>
      </div>
    </div>
  );
}
