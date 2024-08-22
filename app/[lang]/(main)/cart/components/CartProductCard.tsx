"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { IProduct } from "../../product/types";
import { BsDash, BsPlus, BsTrash } from "react-icons/bs";
import Counter from "../../../../components/Counter/Counter";
import MainSlider from "@/components/Slider";
import { ICheckoutProduct } from "../types";
import { CartContext, useCart } from "../CartProvider";
import { AuthContext } from "@/lib/providers/AuthProvider";

import { usePathname, useRouter } from "next/navigation";
import webRoutes from "@/lib/utils/webRoutes";
import { HandleCart } from "../lib/handleCart";
import { getProductQuantityPrice } from "../../product/utils";
import { useCookies } from "react-cookie";
import Loader from "@/components/Loader";

interface Props {
  product: ICheckoutProduct;
}
function CartProductCard({ product }: Props) {
  const [count, setCount] = useState<number>(product.quantity);

  const { addProductToCart, removeProductFromCart, loading } = useCart();
  const { translate } = useContext(AuthContext);
  const [sku, setSku] = useState(product.sku);
  const [isloading, setIsLoading] = useState<{
    type: "increase" | "decrease" | "remove" | null;
    value: boolean;
  }>({ type: null, value: false });
  const [cookies, setCookie] = useCookies(["isVIP"]);

  const isVip = cookies["isVIP"];
  const router = useRouter();
  const pathName = usePathname();

  // const handleIncrease = () => {
  //   setQuantity(quantity + 1);
  // };
  // const handleDecrease = () => {
  //   const qty = quantity > 0 ? quantity - 1 : 0;
  //   setQuantity(qty);
  // };
  const { availability, max_quantity_cart } = product;
  // const { handleDecrement, handleIncrement, handleRemove, count } = HandleCart({
  //   maxQantity: max_quantity_cart,
  //   isAvailable: availability,
  //   sku: product.sku,
  //   quantity: product.quantity,
  // });

  const handleIncrement = async () => {
    try {
      if (
        availability != false &&
        (max_quantity_cart > 0 ? count < max_quantity_cart : true)
      ) {
        setIsLoading({ type: "increase", value: true });
        const status = await addProductToCart({
          sku,
          quantity: count + 1,
        });

        if (status) {
          setCount((prevCount) => prevCount + 1);
          setIsLoading({ type: "increase", value: false });
          if (pathName.includes(webRoutes.cart)) {
            router.refresh();
          }
        }
      }
    } catch (err) {
      console.log("ERR: ", err);
      setIsLoading({ type: "increase", value: false });
    }
  };

  const handleDecrement = async () => {
    if (count > 1) {
      setIsLoading({ type: "decrease", value: true });
      const status = await addProductToCart({ sku, quantity: count - 1 });

      if (status) {
        setCount((prevCount) => prevCount - 1);
        setIsLoading({ type: "decrease", value: false });
        if (pathName.includes(webRoutes.cart)) {
          router.refresh();
        }
      }
    } else {
      setIsLoading({ type: "remove", value: true });
      const status = await removeProductFromCart(sku);
      console.log("status", status);
      if (status) {
        setCount(0);
        setIsLoading({ type: "remove", value: false });
        if (pathName.includes(webRoutes.cart)) {
          router.refresh();
        }
      }
    }
  };

  const handleRemove = async () => {
    setIsLoading({ type: "remove", value: true });
    const status = await removeProductFromCart(sku);
    if (status) {
      setCount(0);
      setIsLoading({ type: "remove", value: false });
      if (pathName.includes(webRoutes.cart)) {
        router.refresh();
      }
    }
  };
  return count > 0 ? (
    <div className="grid grid-cols-4 gap-4 w-full p-4 rounded bg-white my-4 shadow">
      <div className=" col-span-1 flex items-center justify-center p-2 shadow rounded">
        <div className="relative   w-full aspect-square max-h-32">
          <Image
            src={product.picture}
            fill
            sizes=" 200px, 200px"
            alt={product.name}
          />
        </div>
      </div>
      <div className="col-span-3 py-2 flex flex-col">
        <div className="flex-grow">
          <h3 className="font-semibold mb-2">{product.name}</h3>
          <div className="">
            <span className="font-semibold text-secondary">
              {translate("price")} :
            </span>
            <span className="font-semibold">
              {isVip && product.vip_price ? product.vip_price : product.price}
            </span>
          </div>
          <div className="">
            <span className="font-semibold text-secondary">
              {translate("total")} :
            </span>
            <span className="font-semibold">
              {getProductQuantityPrice(
                Number(
                  isVip && product.vip_price ? product.vip_price : product.price
                ),
                count
              )}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button onClick={() => handleRemove()} className="text-secondary">
            {isloading.type === "remove" && isloading.value ? (
              <Loader color="orange" size={"sm"} />
            ) : (
              <BsTrash className="text-primary" />
            )}
          </button>
          <div className="flex gap-2">
            <button
              disabled={count === 0}
              onClick={() => handleDecrement()}
              className="p-1 shadow rounded text-primary"
            >
              {isloading.type === "decrease" && isloading.value ? (
                <Loader color="orange" size={"sm"} />
              ) : (
                <BsDash size={25} />
              )}
            </button>
            {/* {typeof window !== "undefined" && (
              <AnimatedCounter count={quantity} />
            )} */}
            {/* <Counter count={quantity} /> */}
            <div
              className="font-bold text-center w-full"
              style={{ direction: "ltr" }}
            >
              {/* <Counter count={count} /> */}
              {count < 10 ? "0 " + count : count}
            </div>
            <button
              onClick={() => handleIncrement()}
              className="p-1 shadow rounded text-primary"
            >
              {isloading.type === "increase" && isloading.value ? (
                <Loader color="orange" size={"sm"} />
              ) : (
                <BsPlus size={25} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <span></span>
  );
}

export default CartProductCard;
