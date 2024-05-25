import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import apiHandler from "@/lib/utils/apiHandler";
import { IGetCheckoutResponseResult } from "./types";
import SingleSupplier from "./components/SingleSupplier";
import MultiSuppliers from "./components/MultiSuppliers";
import { Locale } from "../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import CartWrapper from "./components/CartWrapper";
import ProductSlider from "@/components/Slider/ProductSlider";
import { checkout, products } from "../../../../dummyData";
import CartProductCard from "./components/CartProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BsClock } from "react-icons/bs";
import ApplyCoupon from "./components/ApplyCoupon";
import { Suspense } from "react";

export default async function Cart({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const cart: IGetCheckoutResponseResult = await apiHandler(
    "/checkout",
    "GET",
    undefined,
    true,
    false
  );

  // const cart = checkout;

  const dict = await getDictionary(lang);

  const links = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Cart",
      link: "/cart",
    },
  ];

  console.log("cart checkout===>", cart);
  return (
    <div>
      <Container>
        <div className="px-6">
          <Breadcrumbs items={links} />
          <h1 className="text-lg text-secondary font-bold my-4">
            Items related to your cart
          </h1>
        </div>
        <ProductSlider
          size="small"
          xlSize={7}
          lgSize={6}
          mdSize={4}
          smSize={2}
          // items={products}
          items={[]}
          type="normal"
        />
        <div className="px-6">
          <div className="md:grid md:grid-cols-5 gap-8 items-start">
            {/* <Suspense>
              <div className="col-span-3 h-fit">
                {cart.data.map(({ products }, i) => (
                  <CartProductCard key={i} product={products} />
                ))}
              </div>
            </Suspense> */}
          </div>
        </div>
        {cart && cart.data ? (
          cart.data.length === 1 ? (
            <SingleSupplier cart={cart} lang={lang} dict={dict} />
          ) : (
            <MultiSuppliers cart={cart} lang={lang} dict={dict} />
          )
        ) : (
          <div className="flex flex-col mt-20 justify-center items-center">
            <div>{translate(dict, "no_data")}</div>
          </div>
        )}
      </Container>
    </div>
  );
}
