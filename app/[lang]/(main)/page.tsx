import Container from "@/components/Container";
import Categories from "@/module/(main)/category/components/Categories";
import { Suspense } from "react";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import Carousel from "@/components/Carousel";
import { storeCards } from "../../lib/enums/storeCartLinks";
import StoreCard from "@/components/StoreCard";

import FeatureServer from "./feature/components/FeatureServer";
import SliderSkeleton from "@/components/Skeletons/SliderSkeleton";
import Loader from "@/components/Loader";
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
          <div className="grid grid-cols-3 gap-3 md:gap-6 lg:px-16 items-stretch">
            {storeCards(translate, dict).map((item) => (
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

          <div className="bg-primary p-3 md:p-5 lg:p-10 flex md:gap-4 lg:gap-6 my-6 rounded">
            <div>
              {/* <Image src={JImage} alt="jma3ea" className="hidden lg:bolck" /> */}
              <div className="relative w-24 lg:w-28 h-full hidden md:block ">
                <Image src={JImage} alt="jma3ea" fill className=" " />
              </div>
            </div>

            <div className="text-white w-full">
              <div className="flex gap-4">
                <Image
                  src={JImage}
                  alt="jma3ea"
                  width={40}
                  height={40}
                  className=" md:hidden"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-8xl font-extrabold  font-mono">
                    {translate(dict, dict.free_points)}
                  </h1>
                  <h1 className="w-full text-xl md:text-2xl lg:text-3xl font-mono font-semibold lg:text-end py-2 lg:py-4">
                    {translate(dict, dict.free_points_description)}
                  </h1>
                </div>
              </div>

              <div className="flex justify-center gap-2 md:gap-4 items-center">
                <Image
                  src={jma3eaImage}
                  alt="jma3eaLogo"
                  className="hidden md:block"
                />
                <Image
                  src={jma3eaImage}
                  width={95}
                  height={40}
                  alt="jma3eaLogo"
                  className=" md:hidden"
                />
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=droidahmed.com.jm3eia"
                >
                  <Image
                    src={googleStore}
                    alt="googleStore"
                    className="hidden md:block"
                  />
                  <Image
                    src={googleStore}
                    alt="googleStore"
                    width={120}
                    height={50}
                    className=" md:hidden"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://apps.apple.com/eg/app/jameia-com/id1161689495"
                >
                  <Image
                    src={appStore}
                    alt="appStore"
                    className="hidden md:block"
                  />
                  <Image
                    src={appStore}
                    alt="appStore"
                    width={120}
                    height={50}
                    className=" md:hidden"
                  />
                </a>
                <button className="px-1 text-base font-semibold py-1 whitespace-nowrap md:px-5 md:py-2 md:text-2xl lg:px-10 lg:py-3 lg:text-4xl font-mono md:font-bold bg-secondary text-white">
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
          <Suspense
            fallback={
              <div className="w-full flex justify-center">
                <Loader size={"sm"} color="orange" />
              </div>
            }
          >
            {/* @ts-expect-error Server Component */}
            <Categories
              dictionary={{ all_sections: translate(dict, "all_sections") }}
            />
          </Suspense>
        </Container>
      </div>

      <div className="">
        <Container>
          <Suspense
            fallback={
              <div className="w-full flex justify-center">
                <Loader size={"sm"} color="orange" />
              </div>
            }
          >
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
