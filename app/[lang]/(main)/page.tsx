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
import Image from "next/image";
import JImage from "../../../public/assets/J.png";
import jma3eaImage from "../../../public/assets/jma3ea-white.png";
import appStore from "../../../public/assets/app-store.svg";
import googleStore from "../../../public/assets/google-store.svg";
import Suppliers from "./stores/conponents/Suppliers";

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

          <div className="bg-primary p-10 flex gap-6 my-6 rounded">
            <Image src={JImage} alt="jma3ea" />
            <div className="text-white w-full">
              <h1 className="text-8xl font-extrabold  font-mono">
                {translate(dict, dict.free_points)}
              </h1>
              <h1 className="w-full text-3xl font-mono font-semibold text-end py-4">
                {translate(dict, dict.free_points_description)}
              </h1>

              <div className="flex justify-center gap-4 items-center">
                <Image src={jma3eaImage} alt="jma3eaLogo" />
                <a href="/">
                  <Image src={googleStore} alt="googleStore" />
                </a>
                <a href="/">
                  <Image src={appStore} alt="appStore" />
                </a>
                <button className="px-10 py-3 text-4xl font-mono font-bold bg-secondary text-white">
                  Shop Now
                </button>
              </div>
            </div>
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

      <div className="">
        <Container>
          <Suspense fallback={<Loader color="orange" />}>
            {/* @ts-expect-error Server Component */}
            <Suppliers />
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
