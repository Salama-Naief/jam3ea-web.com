import { IFeature } from '@/lib/types';
import { getDiscountPercentage, getPriceWithCurrency } from '@/lib/utils/helpers';
import Link from 'next/link';
import ProductCard from '../../../product/components/ProductCard';

interface FeatureProps {
  feature: IFeature;
}

export default function Feature({ feature }: FeatureProps) {
  const { name, products, slides } = feature;
  return (
    <>
      {slides.map(({ _id, picture, url, name }) => (
        <Link key={_id} href={url}>
          <img src={picture} alt={name} />
        </Link>
      ))}
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">{name}</h2>
          <a href="#" className="text-sm text-primary">
            View All
          </a>
        </div>
        <div className="flex flex-nowrap overflow-x-auto max-w-full py-4 gap-3">
          {products.map(
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
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
