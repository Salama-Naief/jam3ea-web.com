import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Categories from "@/module/(main)/category/components/Categories";
import Feature from "@/module/(main)/feature/components/Feature";
import { IFeature } from "@/module/(main)/feature/types";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { getFeaturedProducts } from "@/module/(main)/feature/services";
import CartBottomBar from "@/module/(main)/cart/components/CartBottomBar";
import Link from "next/link";
import webRoutes from "@/lib/utils/webRoutes";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import { getInventories } from "./stores/services";
import NoteBar from "@/components/NoteBar";
import { cookies } from "next/headers";
import VipCard from "@/components/VipCard";
import MartCard from "@/components/MartCard";
import Carousel from "@/components/Carousel";
import { categories, products, storeCards } from "../../../dummyData";
import Image from "next/image";
import MainSlider from "@/components/Slider";
import StoreCard from "@/components/StoreCard";
import ProductSlider from "@/components/Slider/ProductSlider";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  const features = await getFeaturedProducts();
  const inventories = await getInventories();
  const stores =
    inventories && inventories.data && inventories.data.length === 1
      ? inventories.data[0].suppliers
      : [];

  console.log("features", features);
  console.log("inventories", inventories);
  console.log("inventoriesvvv");
  // const isVIP = cookies().get('isVIP');

  return (
    <div id="home">
      <Carousel />
      {/* <MainSlider
          numOfItemsLgScreens={6}
          numOfItemsMdScreens={4}
          numOfItemsSmcreens={2}
        >
          <>
            {categories.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-full flex items-center justify-center w-32 h-32"
              >
                <div>
                  <Image src={item.image} alt={item.name} />
                </div>
                <p>{item.name}</p>
              </div>
            ))}
          </>
        </MainSlider> */}
      {/* {isVIP ? <MartCard lang={lang} /> : <VipCard lang={lang} />} */}
      {/* <Link href={webRoutes.stores} className="w-1/2 block">
            <img
              src={
                inventories && inventories.data && inventories.data.length > 0
                  ? inventories.data[0].picture
                  : ""
              }
              className="object-cover"
              alt=""
            />
          </Link> */}
      {/* some cart of stores */}
      <div className="h-fit my-8">
        <Container>
          <div className="lg:grid lg:grid-cols-3 gap-6 px-16 items-stretch">
            {storeCards.map((item) => (
              <div key={item.id} className="w-full h-fit">
                <StoreCard
                  name={item.name}
                  image={item.image}
                  label={item.label}
                  link={item.label}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* {inventories && inventories.data && inventories.data.length === 1 && (
        <div>
          <div className="flex flex-nowrap overflow-x-auto max-w-full py-4 gap-3">
            {stores.map((supplier) => (
              <Link
                key={supplier._id}
                href={webRoutes.store(supplier._id)}
                className="flex flex-col align-items-center justify-content-center flex-shrink-0"
              >
                <Image
                  src={supplier.logo}
                  width={80}
                  height={80}
                  alt={
                    typeof supplier.name === "object"
                      ? supplier.name.en
                      : supplier.name
                  }
                />
                <div className="text-sm text-center">
                  {typeof supplier.name === "object"
                    ? supplier.name.en
                    : supplier.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )} */}
      {/* <NoteBar
        dictionary={{
          free_points: translate(dict, "free_points"),
          free_points_description: translate(dict, "free_points_description"),
        }}
      /> */}
      <div className="font-bold text-2xl md:text-3xl lg:text-4xl my-6 capitalize text-center text-primary">
        {translate(dict, "categories")}
      </div>
      <div className="block">
        <Container>
          {/* @ts-expect-error Server Component */}
          <Categories
            dictionary={{ all_sections: translate(dict, "all_sections") }}
            limit={12}
          />
          <div className="py-1">
            {/* @ts-expect-error Server Component */}
            <Categories
              dictionary={{ all_sections: translate(dict, "all_sections") }}
              limit={12}
              rtl={true}
            />
          </div>
          <Link href={"/"}>
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl py-2 capitalize text-end text-secondary">
              {translate(dict, "Show_all")}
            </h2>
          </Link>
        </Container>
      </div>
      <div className="font-bold text-4xl my-6 capitalize text-center text-primary">
        {translate(dict, "best_seller")}
      </div>
      <ProductSlider type="bestSeller" items={products} />
      {/* <Suspense fallback={<Loader />}>
          {features &&
            Array.isArray(features) &&
            features.map((feature: IFeature) => (
              <Feature
                key={feature._id}
                feature={feature}
                dictionary={{
                  view_all: translate(dict, "view_all"),
                  currency: translate(dict, "currency"),
                }}
              />
            ))}
        </Suspense> */}

      <CartBottomBar />
    </div>
  );
}
