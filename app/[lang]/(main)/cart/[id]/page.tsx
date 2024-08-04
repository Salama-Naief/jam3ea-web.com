import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import apiHandler from "@/lib/utils/apiHandler";
import { IGetCheckoutResponse, IGetCheckoutResponseResult } from "../types";
import SingleSupplier from "../components/SingleSupplier";
// import MultiSuppliers from "./components/MultiSuppliers";
import { Locale } from "../../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";

import CartProductCard from "../components/CartProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BsClock } from "react-icons/bs";
import ApplyCoupon from "../components/ApplyCoupon";
import { Suspense } from "react";
import RelatedProducts from "../components/RelatedProducts";
import { IUser } from "../../(profile)/types";

export default async function Cart({
  params: { lang, id },
  searchParams,
}: {
  params: { id: string; lang: Locale };
  searchParams: { id: string };
}) {
  const cart: IGetCheckoutResponse = await apiHandler(
    `/checkout?supplier_id=${id}`,
    "GET",
    undefined,
    true,
    false
  );

  console.log("searchParams", id);
  console.log("cart-d-d-d", cart);
  const user: IUser = await apiHandler(
    "/profile",
    "GET",
    undefined,
    true,
    false
  );

  // const cart = checkout;

  const dict = await getDictionary(lang);
  const categoryId =
    cart &&
    Array.isArray(cart.products) &&
    cart.products.length > 0 &&
    cart.products[0].categories
      ? //@ts-expect-error
        cart.products[0].categories[0]._id
      : undefined;
  const links = [
    {
      label: translate(dict, dict.home),
      link: "/",
    },
    {
      label: translate(dict, dict.cart),
      link: "/cart",
    },
  ];

  return (
    <div>
      <Container>
        <div className="px-6">
          <Breadcrumbs items={links} />
          {categoryId && (
            <h1 className="text-lg text-secondary font-bold my-4">
              {translate(dict, dict.items_related_to_cart)}
            </h1>
          )}
        </div>
        <Suspense>
          {cart && cart.products.length && (
            /* @ts-ignore */
            <RelatedProducts categoryId={categoryId} />
          )}
        </Suspense>
        <div className="px-6">
          <div className="md:grid md:grid-cols-5 gap-8 items-start"></div>
        </div>
        {cart &&
          (Array.isArray(cart.products) && cart.products.length >= 1 ? (
            <SingleSupplier user={user} cart={cart} lang={lang} dict={dict} />
          ) : (
            <div className="flex flex-col h-screen lg:h-96 mt-20 justify-center items-center">
              <div>{translate(dict, "no_data")}</div>
            </div>
          ))}
      </Container>
    </div>
  );
}
