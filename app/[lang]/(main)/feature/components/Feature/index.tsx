import { IFeature } from "../../types";
import Link from "next/link";
import ProductCard from "../../../product/components/ProductCard";
import webRoutes from "@/lib/utils/webRoutes";
import { Locale } from "../../../../../../i18n-config";
import { getSlideUrl } from "../../utils";
import Image from "next/image";
import ProductSlider from "@/components/Slider/ProductSlider";

interface FeatureProps {
  feature: IFeature;
  supplierId?: string;
  dictionary: {
    view_all: string;
    currency: string;
  };
}

export default function Feature({
  feature,
  supplierId,
  dictionary,
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
        <div className="flex justify-between items-center my-4">
          <h2 className="font-bold text-lg">{name}</h2>
          <Link
            href={webRoutes.feature(_id, name, supplierId)}
            className="text-sm text-primary"
          >
            {dictionary.view_all}
          </Link>
        </div>
        <div className="w-full">
          <ProductSlider
            type="bestSeller"
            autoAnimation={false}
            items={products.slice(0, 10)}
          />
          {/* {products.map(
            ({
              name,
              price,
              old_price,
              picture,
              sku,
              availability,
              cart_status,
              has_variants,
              max_quantity_cart,
              wishlist_status,
            }) => (
              <ProductCard
                key={sku}
                sku={sku}
                name={name}
                price={price}
                oldPrice={old_price}
                picture={picture}
                isInWhishlist={wishlist_status.is_exists}
                cartStatus={cart_status}
                isAvailable={availability}
                maxQuantityCart={max_quantity_cart}
                hasVariants={has_variants}
                currency={dictionary.currency}
              />
            )
          )} */}
        </div>
      </div>
    </div>
  );
}
