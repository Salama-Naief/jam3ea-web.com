import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import ProductCard from '@/module/product/components/ProductCard';
import { searchProduct } from '../services';
import { Locale } from '../../../../i18n-config';

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: { q: string; lang: Locale };
  searchParams?: { [key: string]: string /*  | string[] */ | undefined };
}) {
  const products = await searchProduct(params.q, searchParams?.supplier_id);

  return (
    <div>
      <Navbar hasSearch expandSearch searchValue={params.q} />
      <Container>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2 items-stretch">
          {products?.data.map(
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
      </Container>
    </div>
  );
}
