"use client";
import webRoutes from "@/lib/utils/webRoutes";
import React, { useContext, useState } from "react";
import { CartContext } from "../CartProvider";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  //   count: number;
  //   setCount: any;
  isAvailable: boolean;
  maxQantity: number;
  sku: string;
  quantity: number;
}
export function HandleCart({
  //   count,
  isAvailable,
  maxQantity,
  quantity,
  //   setCount,
  sku,
}: Props) {
  const [count, setCount] = useState(quantity);
  const { addProductToCart, removeProductFromCart } = useContext(CartContext);
  const [loading, setLoading] = useState<boolean>(false);
  //   const [sku, setSku] = useState(defaultSku);
  const router = useRouter();
  const pathName = usePathname();

  const handleIncrement = async () => {
    try {
      if (
        isAvailable != false &&
        (maxQantity > 0 ? count < maxQantity : true)
      ) {
        setLoading(true);
        const status = await addProductToCart({
          sku,
          quantity: count + 1,
        });
        console.log("statuess,", status);
        if (status) {
          setCount((prevCount: number) => prevCount + 1);
          //   setCount("normal" ? count : count + 1);
          // router.refresh();
          // if (pathName.includes(webRoutes.cart)) {
          //   router.refresh();
          // }
        }
        setLoading(false);
      }
    } catch (err) {
      console.log("ERR: ", err);
    }
  };

  const handleDecrement = async () => {
    setLoading(true);
    if (count > 1) {
      const status = await addProductToCart({ sku, quantity: count - 1 });
      if (status) {
        setCount((prevCount: number) => prevCount - 1);
        // setCount(count - 1);
        // if (pathName.includes(webRoutes.cart)) {
        //   router.refresh();
        // }
      }
    } else {
      const status = await removeProductFromCart(sku);
      if (status) {
        setCount(0);
        if (pathName.includes(webRoutes.cart)) {
          router.refresh();
        }
      }
    }
    setLoading(false);
  };

  const handleRemove = async () => {
    const status = await removeProductFromCart(sku);
    if (status) {
      setCount(0);
      if (pathName.includes(webRoutes.cart)) {
        router.refresh();
      }
    }
  };
  return {
    handleDecrement,
    handleIncrement,
    handleRemove,
    count,
    loading,
  };
}
