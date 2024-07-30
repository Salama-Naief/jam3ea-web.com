import Container from "@/components/Container";
import { getProductBySku, getProductCategoryRank } from "../services";
import AddToCartButton from "@/module/(main)/cart/components/AddToCartButton";
import { getPrice, getPriceWithCurrency } from "../utils";
import { Locale } from "../../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";

import SingleProductSlider from "@/components/Slider/SingleProductSlider";
import ProductSlider from "@/components/Slider/ProductSlider";
import Breadcrumbs from "@/components/Breadcrumbs";
import { cookies } from "next/headers";

export default async function ProductPage({
  params,
}: {
  params: { sku: string; lang: Locale };
}) {
  const product = await getProductBySku(params.sku);
  const cookie = await cookies();
  const isVip = cookie.get("isVIP")?.value;
  let productCategoryRank: any = [];
  if (product && product.prod_n_categoryArr) {
    const p = product.prod_n_categoryArr
      .filter((i) => i.category_id && i.rank_id)
      .sort(function (a, b) {
        return a.sorting && b.sorting ? b.sorting - a.sorting : -1;
      });
    if (p.length > 0) {
      productCategoryRank = await getProductCategoryRank(
        p[0].category_id,
        p[0].rank_id
      );
    }
  }
  const dict = await getDictionary(params.lang);
  if (!product) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-danger">
        something went wrong no data found!
      </div>
    );
  }

  const {
    picture,
    name,
    price,
    cart_status,
    availability,
    max_quantity_cart,
    sku,
    wishlist_status,
    categories,
    description,
    variants,
    has_variants,
  } = product;

  console.log("product----=-=-", product);

  const getPrices = getPrice({
    price: product.price,
    oldPrice: product.old_price,
    vipPrice: product.vip_price,
    vipOldPrice: product.vip_old_price,
    isVip: isVip && isVip === "true" ? true : false,
  });
  console.log("getPrices", getPrices);
  return (
    <div className="my-10 w-screen">
      <Container>
        {product && (
          <>
            <div>
              {/* <Breadcrumbs items={Links} /> */}
              <div className=" md:grid md:grid-cols-2 gap-6">
                {product && (
                  <SingleProductSlider product={product} isVip={isVip} />
                )}

                <div className="p-4">
                  <h1 className="text-xl md:text-2xl mb-4 font-bold">{name}</h1>
                  <div className="flex justify-between w-full md:w-1/2 lg:w-1/2">
                    {getPrices && (
                      <span className="font-bold text-secondary text-lg">
                        {getPriceWithCurrency(
                          getPrices.price,
                          translate(dict, "currency")
                        )}
                      </span>
                    )}
                    {getPrices && getPrices.oldPrice && (
                      <span className="font-bold text-secondary line-through decoration-danger decoration-2 text-lg">
                        {getPriceWithCurrency(
                          getPrices.oldPrice,
                          translate(dict, "currency")
                        )}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 my-4 gap-4">
                    {/* <div className="bg-gray-100 w-full text-primary font-bold rounded-lg py-2 text-center">
                      {product.}
                    </div> */}
                    {
                      <div
                        className={`${
                          availability ? "text-green-900" : "text-danger"
                        } bg-gray-100  w-full  font-bold rounded-lg py-2 text-center`}
                      >
                        {availability
                          ? translate(dict, dict.available)
                          : translate(dict, dict.not_available)}
                      </div>
                    }
                  </div>
                  <div className="flex items-start justify-center my-4">
                    <div className="w-full">
                      <AddToCartButton
                        normalBtn
                        sku={sku}
                        cartsStatus={cart_status}
                        isAvailable={availability}
                        maxQantity={max_quantity_cart}
                        hasVariant={has_variants}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-10">
              <ProductSlider
                items={product ? product.related_products : []}
                type="normal"
              />
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
