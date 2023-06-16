import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import { getProductsByFeature } from '../services';
import ProductCard from '@/module/product/components/ProductCard';
import { getCategoryById } from '@/module/category/services';

export default async function Feature({
  params: { id },
  searchParams: { supplier, name },
}: {
  params: { id: string };
  searchParams: { supplier: string; name: string };
}) {
  const products = await getProductsByFeature(id);
  console.log('this is the supplier: ', supplier);

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
                />
              )
            )}
        </div>
      </Container>
    </div>
  );
}
