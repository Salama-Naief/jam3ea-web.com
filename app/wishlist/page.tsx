import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import apiHandler from '@/lib/utils/apiHandler';
import ProductCard from '@/product/components/ProductCard';
import { IProduct } from '@/product/types';

export default async function Wishlist() {
  const products: IProduct[] = await apiHandler('/wishlist');
  return (
    <div>
      <Navbar />
      <div className="pt-20"></div>
      <Container>
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
                className="w-full"
              />
            )
          )}
        </div>
      </Container>
    </div>
  );
}
