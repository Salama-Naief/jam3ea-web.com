"use client";

import AddToCartButton from "@/module/(main)/cart/components/AddToCartButton";
import AddToWishlist from "@/module/(main)/wishlist/components/AddToWishlist";
import webRoutes from "@/lib/utils/webRoutes";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { BsPlus, BsTrash } from "react-icons/bs";

import Loader from "@/components/Loader";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../cart/CartProvider";
import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { useCookies } from "react-cookie";
import { LANGUAGES } from "@/lib/enums";
import { IWishlistProduct } from "../../types";
import { getDiscountPercentage } from "@/module/(main)/product/utils";

interface ProductCardProps {
  product: IWishlistProduct;
  className?: string;
}

export default function WishlistProductCart({
  product,
  className = "",
}: ProductCardProps) {
  // const { count, handleIncrement, handleRemove, loading } = HandleCart({
  //   isAvailable,
  //   maxQantity: maxQuantityCart,
  //   quantity: cartStatus && cartStatus.quantity ? cartStatus.quantity : 0,
  //   sku,
  // });
  const [count, setCount] = useState(0);
  const { addProductToCart, removeProductFromCart } = useContext(CartContext);
  const [removeloading, setRemoveLoading] = useState<boolean>(false);
  const [addloading, setAddLoading] = useState<boolean>(false);
  const { translate, language } = useContext(AuthContext);
  const [cookies, setCookie] = useCookies(["isVIP"]);

  const isVip = cookies["isVIP"];

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    setCount(product.cart_status.quantity);
  }, [product.cart_status.quantity]);
  const handleIncrement = async () => {
    try {
      setAddLoading(true);
      const status = await addProductToCart({
        sku: product.sku,
        quantity: count + 1,
      });

      if (status) {
        setCount((prevCount: number) => prevCount + 1);
        //   setCount("normal" ? count : count + 1);
        router.refresh();
        if (pathName.includes(webRoutes.cart)) {
          router.refresh();
        }
      }
      setAddLoading(false);
    } catch (err) {
      console.log("ERR: ", err);
    }
  };

  const handleRemove = async () => {
    setRemoveLoading(true);
    const status = await removeProductFromCart(product.sku);
    if (status) {
      setCount(0);
      router.refresh();
      if (pathName.includes(webRoutes.cart)) {
        router.refresh();
      }
    }
    setRemoveLoading(false);
  };

  return (
    <div className="p-2 h-[100%]">
      <div
        className={`flex-shrink-0 flex h-full flex-col bg-white w-full  mx-auto rounded-xl p-4 relative overflow-hidden shadow-md ${className}`}
      >
        <div className="flex-1">
          <div className="bg-danger rounded text-white w-fit px-2 z-10 absolute start-0 top-0 text-sm">
            {getDiscountPercentage(
              parseFloat(String(product.price)),
              parseFloat("")
            )}
          </div>

          <div className="absolute end-3 top-3 z-10">
            <AddToWishlist
              sku={product.sku}
              isInWhishlist={product.cart_status.is_exists}
            />
          </div>
          <Link href={webRoutes.product(product.sku)} prefetch={false}>
            <div
              className={`relative mx-auto ${" w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40"}`}
            >
              <Image
                fill
                src={product.picture}
                sizes="(max-width:200px) 160px, 160px"
                alt={product.name}
                quality={60}
                loading="lazy"
              />
            </div>
          </Link>

          <div
            className={`flex items-center px-2 ${
              count > 0 ? "justify-between" : "justify-end"
            }`}
          >
            {count > 0 && (
              <button
                disabled={removeloading}
                onClick={() => handleRemove()}
                className="text-primary"
              >
                {removeloading ? (
                  <Loader size={"xs"} color="orange" />
                ) : (
                  <BsTrash />
                )}
              </button>
            )}
            <button
              disabled={addloading}
              onClick={() => handleIncrement()}
              className="flex justify-end"
            >
              {addloading ? (
                <Loader size={"xs"} color="orange" />
              ) : count > 0 ? (
                <span className="py-0.5 px-2.5 text-sm  rounded bg-primary text-white">
                  {count}
                </span>
              ) : (
                <BsPlus
                  size={28}
                  className="shadow  bg-gray-50 rounded-md text-primary"
                />
              )}
            </button>
          </div>

          <Link
            href={webRoutes.product(product.sku)}
            prefetch={false}
            className="mt-2 block"
          >
            <div>
              <div className="px-2">
                <div className={`${"justify-start"} flex`}>
                  <div>
                    <span className="font-semibold">{product.price}</span>
                    <sup>{translate("currency")}</sup>
                  </div>
                </div>
              </div>
              <p className={`${" text-[14px] font-semibold md:font-bold"}`}>
                {product.name}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
