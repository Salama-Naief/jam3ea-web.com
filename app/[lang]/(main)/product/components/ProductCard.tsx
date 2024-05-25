"use client";
import { ICartStatus } from "../types";
import { getDiscountPercentage, getPriceWithCurrency } from "../utils";
import AddToCartButton from "@/module/(main)/cart/components/AddToCartButton";
import AddToWishlist from "@/module/(main)/wishlist/components/AddToWishlist";
import webRoutes from "@/lib/utils/webRoutes";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { BsPlus, BsTrash } from "react-icons/bs";
import { HandleCart } from "../../cart/lib/handleCart";
import { LoadingIcon } from "@/components/Icons";

interface ProductCardProps {
  sku: string;
  price: string;
  oldPrice?: string;
  picture: string | StaticImageData;
  name: string;
  isAvailable: boolean;
  cartStatus: ICartStatus;
  isInWhishlist: boolean;
  maxQuantityCart: number;
  hasVariants: boolean;
  currency: string;
  className?: string;
  type?: "bestSeller" | "normal";
  size?: "small" | "large";
}

export default function ProductCard({
  name,
  picture,
  price,
  sku,
  oldPrice,
  isInWhishlist,
  cartStatus,
  isAvailable,
  maxQuantityCart,
  currency,
  hasVariants,
  className = "",
  type,
  size = "large",
}: ProductCardProps) {
  const { count, handleIncrement, handleRemove, loading } = HandleCart({
    isAvailable,
    maxQantity: maxQuantityCart,
    quantity: cartStatus && cartStatus.quantity ? cartStatus.quantity : 0,
    sku,
  });
  console.log("type", type);
  return (
    <div className="px-2">
      <div
        className={`flex-shrink-0 flex flex-col bg-white w-full  mx-auto rounded-xl p-4 relative overflow-hidden ${className}`}
      >
        {oldPrice && (
          <div className="bg-danger rounded text-white w-fit px-2 absolute start-0 top-0 text-sm">
            {getDiscountPercentage(parseFloat(price), parseFloat(oldPrice))}
          </div>
        )}
        <AddToWishlist sku={sku} isInWhishlist={isInWhishlist} />
        <Link href={webRoutes.product(sku)} prefetch={false}>
          <div
            className={`relative mx-auto ${
              size === "small" ? "w-20 h-20" : "w-40 h-40"
            }`}
          >
            <Image
              fill
              src={picture}
              sizes="(max-width:200px) 160px, 160px"
              alt={name}
            />
          </div>
        </Link>
        {type === "normal" && (
          <div
            className={`flex items-center px-2 ${
              cartStatus && cartStatus.is_exists && count !== 0
                ? "justify-between"
                : "justify-end"
            }`}
          >
            {cartStatus && cartStatus.is_exists && count !== 0 && (
              <button onClick={() => handleRemove()} className="text-primary">
                {loading ? <LoadingIcon /> : <BsTrash />}
              </button>
            )}
            <button
              onClick={() => handleIncrement()}
              className="flex justify-end"
            >
              {cartStatus && cartStatus.is_exists && count !== 0 ? (
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
        )}
        <Link
          href={webRoutes.product(sku)}
          prefetch={false}
          className="mt-2 block"
        >
          <div>
            <div>
              <span className="font-semibold">{price}</span>
              <sup>{currency}</sup>
            </div>
            <p
              className={`${
                size === "small"
                  ? " text-base font-semibold"
                  : " text-base font-bold"
              }`}
            >
              {name}
            </p>
          </div>
        </Link>
        {type === "bestSeller" && (
          <AddToCartButton
            sku={sku}
            cartsStatus={cartStatus}
            maxQantity={maxQuantityCart}
            isAvailable={isAvailable}
            hasVariant={hasVariants}
          />
        )}
      </div>
    </div>
  );
}
