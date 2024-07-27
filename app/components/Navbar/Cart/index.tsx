"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import cartIcon from "../../../../public/assets/cart.svg";
import Link from "next/link";
import webRoutes from "@/lib/utils/webRoutes";
import useHttpClient from "@/lib/hooks/useHttpClient";
import { IGetCartResponseResult } from "@/module/(main)/cart/types";
import { CartContext, useCart } from "@/module/(main)/cart/CartProvider";
import { getAllCarts, getCart } from "@/module/(main)/cart/services";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { LANGUAGES } from "@/lib/enums";
import { Divider, Menu } from "@mantine/core";
import jamieaLogo from "../../../../public/assets/logo-sm.png";
import { useParams } from "next/navigation";

function Cart() {
  const { sendRequest, results, errors } =
    useHttpClient<IGetCartResponseResult>();
  // const { cart, setCart } = useContext(CartContext);
  const { setCart, cart } = useCart();
  const { translate } = useContext(AuthContext);
  const params = useParams();
  const language = params["lang"];
  const [isDomReady, setIsDomReady] = useState(false);

  useEffect(() => {
    setIsDomReady(true);
    // const fetchData = async () => {
    //   // const status = await sendRequest(getCart());
    //   const allCarts = await getAllCarts();
    //   if (allCarts.success && allCarts.results) {
    //     //@ts-expect-error
    //     setCart(allCarts.results);
    //   }
    //   console.log("allCarts", allCarts);
    //   console.log("get cart Status", status);
    // };
    // fetchData();
  }, [setCart]);

  console.log("cart===>", cart);
  return (
    <div className=" relative">
      {/* <Link href={webRoutes.cart}>
        <span
          className={`absolute ${
            language === LANGUAGES.ARABIC
              ? "-left-1 lg:-left-1.5"
              : "-right-1 lg:-right-1.5"
          } -top-2  text-xs lg:text-sm bg-danger flex items-center justify-center text-white rounded-full w-4 h-4 lg:w-5 lg:h-5`}
        >
          {cart.length}
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
      </Link> */}

      <div>
        {isDomReady ? (
          <Menu>
            <Menu.Target>
              <div>
                <span
                  className={`absolute ${
                    language === LANGUAGES.ARABIC
                      ? "-left-1 lg:-left-1.5"
                      : "-right-1 lg:-right-1.5"
                  } -top-2  text-xs lg:text-sm bg-danger flex items-center justify-center text-white rounded-full w-4 h-4 lg:w-5 lg:h-5`}
                >
                  {cart.length}
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
              </div>
            </Menu.Target>
            <Menu.Dropdown classNames={{ dropdown: "bg-white shadow-md" }}>
              {Array.isArray(cart) &&
                cart.map((cartItem) => (
                  <Menu.Item
                    key={cartItem._id}
                    className=""
                    // onClick={() => changeLanguage(LANGUAGES.ARABIC, true)}
                  >
                    <Link
                      href={`/cart/${cartItem._id}`}
                      className=" flex gap-3 items-center font-bold"
                    >
                      {cartItem.logo ? (
                        <div className="w-9 h-9 relative">
                          <Image
                            src={cartItem.logo}
                            // width={50}
                            // height={50}
                            fill
                            alt={"logo"}
                          />
                        </div>
                      ) : (
                        <div className=" relative">
                          <Image
                            src={jamieaLogo}
                            width={50}
                            height={50}
                            // fill
                            alt={"logo"}
                          />
                        </div>
                      )}

                      <div className="text-xs font-semibold">
                        <div className="flex gap-1">
                          <span className="text-sm font-semibold">
                            {translate("total")} :
                          </span>
                          <span>
                            {" "}
                            {cartItem.cart.total}
                            {translate("currency")}
                          </span>
                        </div>
                        <div className="flex gap-1">
                          <span>{translate("quantity")} :</span>
                          <span>{cartItem.cart.quantity}</span>
                        </div>
                        <div className="flex gap-1">
                          <span>{translate("products")} :</span>
                          <span>{cartItem.cart.products}</span>
                        </div>
                      </div>
                    </Link>
                    <Divider mt={"xs"} />
                  </Menu.Item>
                ))}
            </Menu.Dropdown>
          </Menu>
        ) : (
          <div>
            <span
              className={`absolute ${
                language === LANGUAGES.ARABIC
                  ? "-left-1 lg:-left-1.5"
                  : "-right-1 lg:-right-1.5"
              } -top-2  text-xs lg:text-sm bg-danger flex items-center justify-center text-white rounded-full w-4 h-4 lg:w-5 lg:h-5`}
            >
              {0}
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
