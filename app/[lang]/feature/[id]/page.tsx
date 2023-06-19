import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import { getProductsByFeature } from '../services';
import ProductCard from '@/module/product/components/ProductCard';
import { getCategoryById } from '@/module/category/services';
import { Locale } from '../../../../i18n-config';
import { getDictionary } from '@/lib/utils/dictionary';
import { translate } from '@/lib/utils/serverHelpers';
import CartBottomBar from '@/module/cart/components/CartBottomBar';

export default async function Feature({
  params: { id, lang },
  searchParams: { supplier, name },
}: {
  params: { id: string; lang: Locale };
  searchParams: { supplier: string; name: string };
}) {
  const products = await getProductsByFeature(id);

  const dict = await getDictionary(lang);

  return (
    <div>
      <Navbar hasSearch title={name} supplierId={supplier} />
      <Container>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2 items-stretch">
          {products &&
            products.data.map(
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
                  currency={translate(dict, 'currency')}
                />
              )
            )}
        </div>
      </Container>
      <CartBottomBar />
    </div>
  );
}
