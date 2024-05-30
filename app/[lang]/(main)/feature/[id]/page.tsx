import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { getFeaturedProducts, getProductsByFeature } from "../services";
import ProductCard from "@/module/(main)/product/components/ProductCard";
import { getCategoryById } from "@/module/(main)/category/services";
import { Locale } from "../../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import CartBottomBar from "@/module/(main)/cart/components/CartBottomBar";

export default async function Feature({
  params: { id, lang },
  searchParams: { supplier, name },
}: {
  params: { id: string; lang: Locale };
  searchParams: { supplier: string; name: string };
}) {
  const products = await getProductsByFeature(id);

  const dict = await getDictionary(lang);
  console.log("feature products", products);
  return (
    <div>
      {/* <Navbar hasSearch title={name} supplierId={supplier} /> */}
      <Container>
        <div className="my-10 text-2xl text-center text-secondary font-bold">
          {name}
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4 items-stretch bg-gray-100 p-6">
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
                  currency={translate(dict, "currency")}
                  type="normal"
                />
              )
            )}
        </div>
      </Container>
      {/* <CartBottomBar /> */}
    </div>
  );
}
