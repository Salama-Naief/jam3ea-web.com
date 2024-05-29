import { IFeature } from "../../types";
import Link from "next/link";
import ProductCard from "../../../product/components/ProductCard";
import webRoutes from "@/lib/utils/webRoutes";
import { Locale } from "../../../../../../i18n-config";
import { getSlideUrl } from "../../utils";
import Image from "next/image";
import ProductSlider from "@/components/Slider/ProductSlider";
import Slider from "@/components/Slider/Carousal";
import { Loader } from "@mantine/core";

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
        slides.length > 0 &&
          // <Slider lgSize={1} mdSize={1} smSize={1} xlSize={1} autoPlay={true}>
          slides.map(({ _id, picture, url, name }) => (
            <Link key={_id} href={getSlideUrl(url, supplierId)}>
              {picture && (
                <div className="relative w-full h-96">
                  <Image
                    src={picture}
                    quality={60}
                    fill
                    loading="lazy"
                    alt={name}
                  />
                </div>
              )}
            </Link>
          ))
        // </Slider>
      }
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
          {typeof window === undefined ? (
            <div className="w-full h-16 flex items-center justify-center">
              <Loader color="orange" />
            </div>
          ) : (
            <Slider type={productType} data={products.slice(0, 9)} />
            // <div className="flex w-screen gap-4 overflow-x-auto">
            //   {products.slice(0, 9).map((product) => (
            //     <ProductCard
            //       key={product.sku}
            //       sku={product.sku}
            //       name={product.name}
            //       price={product.price}
            //       oldPrice={product.old_price}
            //       picture={product.picture}
            //       isInWhishlist={product.wishlist_status.is_exists}
            //       cartStatus={product.cart_status}
            //       isAvailable={product.availability}
            //       maxQuantityCart={product.max_quantity_cart}
            //       hasVariants={product.has_variants}
            //       currency={"kwd"}
            //       type={productType}
            //     />
            //   ))}
            // </div>
          )}
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
