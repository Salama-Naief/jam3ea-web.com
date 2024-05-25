"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import cartIcon from "../../../../public/assets/cart.svg";
import Link from "next/link";
import webRoutes from "@/lib/utils/webRoutes";
import useHttpClient from "@/lib/hooks/useHttpClient";
import { IGetCartResponseResult } from "@/module/(main)/cart/types";
import { CartContext } from "@/module/(main)/cart/CartProvider";
import { getCart } from "@/module/(main)/cart/services";

function Cart() {
  const { sendRequest, results, errors } =
    useHttpClient<IGetCartResponseResult>();
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    const fetchData = async () => {
      const status = await sendRequest(getCart());
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (results && !errors) {
      setCart({
        price: results.total,
        quantity: results.total_quantities,
        products: results.data.length,
      });
      console.log("SUCCESS: ", cart, results);
    } else {
      console.log("FAILED: ", results, errors);
    }
  }, [results, errors]);

  return (
    <div className=" relative">
      <Link href={webRoutes.cart}>
        <span className="absolute -top-2 -end-2 text-sm bg-danger flex items-center justify-center text-white rounded-full w-6 h-6">
          {cart.quantity}
        </span>
        <Image src={cartIcon} alt="cart" />
      </Link>
    </div>
  );
}

export default Cart;
