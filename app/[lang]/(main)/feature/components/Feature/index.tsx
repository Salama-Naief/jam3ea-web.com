import { IFeature } from "../../types";
import Link from "next/link";
import webRoutes from "@/lib/utils/webRoutes";
import { Locale } from "../../../../../../i18n-config";
import { getSlideUrl } from "../../utils";
import Image from "next/image";
import ProductSlider from "@/components/Slider/ProductSlider";
import FeatureSlider from "../FeatueSlider";
import Loader from "@/components/Loader";
import FeatureCarousel from "../FeatueCarousel";

interface FeatureProps {
  feature: IFeature;
  supplierId?: string;
  title?: "center" | "start";
  productType?: "normal" | "bestSeller";
  dictionary: {
    view_all: string;
    currency: string;
  };
}

export default function Feature({
  feature,
  supplierId,
  dictionary,
  title = "center",
  productType = "bestSeller",
}: FeatureProps) {
  const { _id, name, products, slides } = feature;

  return (
    <div className="w-full my-4">
      {
        slides.length > 0 && (
          <FeatureCarousel data={slides} supplierId={supplierId} />
        )
        // <Slider lgSize={1} mdSize={1} smSize={1} xlSize={1} autoPlay={true}>
        // slides.map(({ _id, picture, url, name }) => (
        //   <Link key={_id} href={getSlideUrl(url, supplierId)}>
        //     {picture && (
        //       <div className="relative w-full h-96">
        //         <Image
        //           src={picture}
        //           quality={60}
        //           fill
        //           loading="lazy"
        //           alt={name}
        //         />
        //       </div>
        //     )}
        //   </Link>
        // ))
        // </Slider>
      }
      <div>
        <div className="flex justify-between items-center px-4 my-4 md:my-6">
          <h2
            className={`${
              title === "center"
                ? "text-primary text-center text-xl md:text-2xl"
                : "text-start  md:text-lg lg:text-xl"
            } font-bold `}
          >
            {name}
          </h2>
          <div className="flex justify-end">
            <Link
              href={webRoutes.feature(_id, name, supplierId)}
              className="text-[15px] lg:text-lg text-secondary"
            >
              {dictionary.view_all}
            </Link>
          </div>
        </div>

        <div className="w-full">
          {typeof window === undefined ? (
            <div className="w-full h-16 flex items-center justify-center">
              <Loader color="orange" />
            </div>
          ) : (
            <FeatureSlider type={productType} data={products.slice(0, 12)} />
          )}
        </div>
      </div>
    </div>
  );
}
