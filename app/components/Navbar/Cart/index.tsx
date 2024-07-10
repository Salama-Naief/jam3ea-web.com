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
import { AuthContext } from "@/lib/providers/AuthProvider";
import { LANGUAGES } from "@/lib/enums";

function Cart() {
  const { sendRequest, results, errors } =
    useHttpClient<IGetCartResponseResult>();
  const { cart, setCart } = useContext(CartContext);
  const { language } = useContext(AuthContext);
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
        <span
          className={`absolute ${
            language === LANGUAGES.ARABIC
              ? "-left-1 lg:-left-1.5"
              : "-right-1 lg:-right-1.5"
          } -top-2  text-xs lg:text-sm bg-danger flex items-center justify-center text-white rounded-full w-4 h-4 lg:w-5 lg:h-5`}
        >
          {cart.quantity}
        </span>
        <Image
          width={32}
          height={32}
          src={cartIcon}
          alt="cart"
          className={`hidden lg:block `}
        />
        <Image
          width={25}
          height={25}
          src={cartIcon}
          alt="cart"
          className="lg:hidden"
        />
      </Link>
    </div>
  );
}

export default Cart;
