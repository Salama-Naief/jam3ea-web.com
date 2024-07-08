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
      console.log("get cart Status", status);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log();
    if (results && !errors) {
      setCart({
        price: results.Jm3eia.total,
        quantity: results.Jm3eia.total_quantities,
        products: results.Jm3eia.cart_products.length,
      });
      console.log("SUCCESS: ", cart, results);
    } else {
      console.log("FAILED: ", results, errors);
    }
  }, [results, errors]);
  console.log("get cart", cart);

  return (
    <div className=" relative">
      <Link href={webRoutes.cart}>
        <span className="absolute -top-4 end-3 text-sm bg-danger flex items-center justify-center text-white rounded-full w-5 h-5">
          {cart.quantity}
        </span>
        <Image
          width={32}
          height={32}
          src={cartIcon}
          alt="cart"
          className="hidden lg:block"
        />
        <Image
          width={30}
          height={30}
          src={cartIcon}
          alt="cart"
          className="lg:hidden"
        />
      </Link>
    </div>
  );
}

export default Cart;
