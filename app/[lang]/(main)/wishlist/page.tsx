import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import apiHandler from "@/lib/utils/apiHandler";
import ProductCard from "@/module/(main)/product/components/ProductCard";
import { IProduct } from "@/module/(main)/product/types";
import { Locale } from "../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import EmptyWishList from "./components/EmptyWishlist";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function Wishlist({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const products: IProduct[] = await apiHandler("/wishlist");
  const dict = await getDictionary(lang);

  const links = [
    {
      label: "Home",
      link: "/",
    },
    { label: "My Wish list", link: "/wishlist" },
  ];
  return (
    <div className="bg-gray-50 p-8">
      <div>
        <Breadcrumbs items={links} />
      </div>
      <Container>
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
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
                  isInWhishlist={true}
                  cartStatus={cart_status}
                  isAvailable={availability}
                  maxQuantityCart={max_quantity_cart}
                  hasVariants={has_variants}
                  currency={translate(dict, "currency")}
                  className="w-full"
                  type="normal"
                />
              )
            )}
          </div>
        ) : (
          <EmptyWishList
            dictionary={{
              back_to_home: translate(dict, "back_to_home"),
              wishlist_empty: translate(dict, "wishlist_empty"),
            }}
          />
        )}
      </Container>
    </div>
  );
}
