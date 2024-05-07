import { ICartStatus } from "../types";
import { getDiscountPercentage, getPriceWithCurrency } from "../utils";
import AddToCartButton from "@/module/(main)/cart/components/AddToCartButton";
import AddToWishlist from "@/module/(main)/wishlist/components/AddToWishlist";
import webRoutes from "@/lib/utils/webRoutes";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { BsPlus } from "react-icons/bs";

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
  return (
    <div className="px-2">
      <div
        className={`flex-shrink-0 flex flex-col bg-white w-full  mx-auto rounded-xl p-4 relative overflow-hidden ${className}`}
      >
        {oldPrice && (
          <div className="bg-danger text-white w-fit px-2 absolute start-0 top-0 text-sm">
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
            <Image fill src={picture} alt={name} />
          </div>
        </Link>
        {type === "normal" && (
          <div className="flex justify-end">
            <BsPlus
              size={28}
              className="shadow  bg-gray-50 rounded-md text-primary"
            />
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
                  : " text-lg font-bold"
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
