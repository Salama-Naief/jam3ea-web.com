import { IFeature } from "../../types";
import Link from "next/link";
import ProductCard from "../../../product/components/ProductCard";
import webRoutes from "@/lib/utils/webRoutes";
import { Locale } from "../../../../../../i18n-config";
import { getSlideUrl } from "../../utils";
import Image from "next/image";
import ProductSlider from "@/components/Slider/ProductSlider";
import Slider from "@/components/Slider/Carousal";

interface FeatureProps {
  feature: IFeature;
  supplierId?: string;
  title?: "center" | "start";
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
}: FeatureProps) {
  const { _id, name, products, slides } = feature;

  return (
    <div className="w-full my-4">
      {slides.length > 0 &&
        slides.map(({ _id, picture, url, name }) => (
          <Link key={_id} href={getSlideUrl(url, supplierId)}>
            <div className="relative w-full h-96">
              <Image src={picture} fill alt={name} />
            </div>
          </Link>
        ))}
      <div>
        <h2
          className={`${
            title === "center"
              ? "text-primary text-center text-2xl"
              : "text-start text-xl"
          } font-bold  my-6`}
        >
          {name}
        </h2>

        <div className="w-full">
          <Slider data={products.slice(0, 9)} />
          <div className="flex justify-end">
            <Link
              href={webRoutes.feature(_id, name, supplierId)}
              className="text-lg text-secondary"
            >
              {dictionary.view_all}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
