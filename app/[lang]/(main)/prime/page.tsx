import Container from "@/components/Container";
import Categories from "@/module/(main)/category/components/Categories";
import { Suspense } from "react";
import { Locale } from "../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import Carousel from "@/components/Carousel";
import { storeCards } from "../../../../dummyData";
import StoreCard from "@/components/StoreCard";

import FeatureServer from "../feature/components/FeatureServer";
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
      <Container>
        <div>Prime page</div>
      </Container>
    </div>
  );
}
