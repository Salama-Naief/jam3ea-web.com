import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

export default async function SearchPage() {
  return (
    <div>
      <Navbar hasSearch expandSearch />
      <Container>
        <div></div>
        {/* <div className="flex flex-nowrap overflow-x-auto max-w-full py-4 gap-3">
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
        </div> */}
      </Container>
    </div>
  );
}
