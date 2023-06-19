import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import apiHandler from '@/lib/utils/apiHandler';
import ProductCard from '@/module/product/components/ProductCard';
import { IProduct } from '@/module/product/types';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '@/lib/utils/dictionary';
import { translate } from '@/lib/utils/serverHelpers';
import EmptyWishList from './components/EmptyWishlist';

export default async function Wishlist({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const products: IProduct[] = await apiHandler('/wishlist');
  const dict = await getDictionary(lang);
  return (
    <div>
      <Navbar title={translate(dict, 'wishlist')} />
      <Container>
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 mt-4">
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
              }) => (
                <ProductCard
                  key={sku}
                  sku={sku}
                  name={name}
                  price={price}
                  oldPrice={old_price}
                  picture={picture}
                  isInWhishlist={true}
                  cartStatus={cart_status}
                  isAvailable={availability}
                  maxQuantityCart={max_quantity_cart}
                  hasVariants={has_variants}
                  currency={translate(dict, 'currency')}
                  className="w-full"
                />
              )
            )}
          </div>
        ) : (
          <EmptyWishList
            dictionary={{
              back_to_home: translate(dict, 'back_to_home'),
              wishlist_empty: translate(dict, 'wishlist_empty'),
            }}
          />
        )}
      </Container>
    </div>
  );
}
