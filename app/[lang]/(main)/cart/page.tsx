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
import { products } from "../../../../dummyData";
import CartProductCard from "./components/CartProductCard";

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

  const dict = await getDictionary(lang);

  return (
    <div>
      <Container>
        <ProductSlider
          size="small"
          xlSize={7}
          lgSize={6}
          mdSize={4}
          smSize={2}
          items={products}
          type="normal"
        />
        <div className="md:grid md:grid-cols-3 gap-3">
          <div className="col-span-2">
            <CartProductCard product={products[2]} />
          </div>
        </div>
        {/* {cart && cart.data ? (
          cart.data.length === 1 ? (
            <SingleSupplier cart={cart} lang={lang} dict={dict} />
          ) : (
            <MultiSuppliers cart={cart} lang={lang} dict={dict} />
          )
        ) : (
          <div className="flex flex-col mt-20 justify-center items-center">
            <div>{translate(dict, "no_data")}</div>
          </div>
        )} */}
      </Container>
    </div>
  );
}
