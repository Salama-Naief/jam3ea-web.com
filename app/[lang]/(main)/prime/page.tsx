import Container from "@/components/Container";
import { Suspense } from "react";
import { Locale } from "../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import FeatureServer from "../feature/components/FeatureServer";
import SliderSkeleton from "@/components/Skeletons/SliderSkeleton";
import martPageImage from "../../../../public/assets/martPage.png";

import Image from "next/image";
import { translate } from "@/lib/utils/serverHelpers";

export default async function PrimePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <div id="mart" className="pt-4">
      <Container>
        <div className="">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary my-4 md:my-6">
            {translate(dict, dict.jameia_prime)}
          </h1>
          <div className="mb-0 lg:mb-6">
            <Image
              src={martPageImage}
              alt="Jameia Mart"
              className="mx-auto rounded-md"
            />
          </div>
        </div>
        <Suspense fallback={<SliderSkeleton />}>
          {/* @ts-expect-error Server Component */}
          <FeatureServer lang={lang} productType="normal" home={true} />
        </Suspense>
      </Container>
    </div>
  );
}
