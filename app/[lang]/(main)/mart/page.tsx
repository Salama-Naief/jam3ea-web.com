import Container from "@/components/Container";
import { Suspense } from "react";
import { Locale } from "../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import FeatureServer from "../feature/components/FeatureServer";
import SliderSkeleton from "@/components/Skeletons/SliderSkeleton";
import martPageImage from "../../../../public/assets/martPage.png";

import Image from "next/image";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <div id="mart" className="pt-4">
      <Container>
        <div className="">
          <h1 className="text-3xl font-bold text-primary my-6">Jameia Mart</h1>
          <div className="mb-6">
            <Image src={martPageImage} alt="Jameia Mart" className="mx-auto" />
          </div>
        </div>
        <Suspense fallback={<SliderSkeleton />}>
          {/* @ts-expect-error Server Component */}
          <FeatureServer lang={lang} productType="normal" />
        </Suspense>
      </Container>
    </div>
  );
}
