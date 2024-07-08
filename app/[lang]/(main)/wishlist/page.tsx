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
import WishlistProductCart from "./components/WishlistProductCart";
import { IWishlistProduct } from "./types";

export default async function Wishlist({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const products: IWishlistProduct[] = await apiHandler(
    "/wishlist",
    "GET",
    undefined,
    true,
    false
  );
  const dict = await getDictionary(lang);

  const links = [
    {
      label: "Home",
      link: "/",
    },
    { label: "My Wish list", link: "/wishlist" },
  ];
  return (
    <div className="bg-gray-50 p-0 md:p-6 lg:p-8">
      <div>
        <Breadcrumbs items={links} />
      </div>
      <Container>
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-3">
            {products.map((product) => (
              <WishlistProductCart key={product.sku} product={product} />
            ))}
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
