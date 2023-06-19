import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import { getProductBySku } from '../services';
import AddToCartButton from '@/module/cart/components/AddToCartButton';
import { getPriceWithCurrency } from '../utils';
import AddToWishlist from '@/module/wishlist/components/AddToWishlist';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/lib/utils/dictionary';
import { translate } from '@/lib/utils/serverHelpers';

export default async function ProductPage({
  params,
}: {
  params: { sku: string; lang: Locale };
}) {
  const product = await getProductBySku(params.sku);
  const dict = await getDictionary(params.lang);

  const {
    picture,
    name,
    price,
    cart_status,
    availability,
    max_quantity_cart,
    sku,
    wishlist_status,
    categories,
    description,
    variants,
    has_variants,
  } = product;

  return (
    <div>
      <Navbar title={name} />
      <Container>
        <div className="">
          <div className="">
            <img
              className="max-w-full object-cover mx-auto min-w-52 max-h-52"
              src={picture}
              alt=""
            />
          </div>
          <div className="flex justify-between">
            <span className="font-bold">
              {getPriceWithCurrency(price, translate(dict, 'currency'))}
            </span>
            <AddToWishlist
              sku={sku}
              isInWhishlist={wishlist_status.is_exists}
            />
          </div>
          <div className="text-lg font-semibold mb-3">{name}</div>
          <div className="flex flex-nowrap overflow-x-auto max-w-full">
            {categories &&
              categories.map((c) => (
                <span
                  key={c.category_id}
                  className="flex-shrink-0 bg-primary-soft text-primary text-xs font-medium mr-2 px-4 py-2 rounded-full"
                >
                  {c.name}
                </span>
              ))}
            {availability && (
              <span className="flex-shrink-0 bg-success-soft text-success text-xs font-medium mr-2 px-4 py-2 rounded-full">
                {translate(dict, 'available')}
              </span>
            )}
          </div>
          {description && (
            <div className="text-gray-400 mb-4">{description}</div>
          )}
          <AddToCartButton
            normalBtn
            sku={sku}
            cartsStatus={cart_status}
            isAvailable={availability}
            maxQantity={max_quantity_cart}
            hasVariant={variants && variants.length > 0}
            variants={variants}
          />
        </div>
      </Container>
    </div>
  );
}
