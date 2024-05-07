"use client";

import useHttpClient from "@/lib/hooks/useHttpClient";
import webRoutes from "@/lib/utils/webRoutes";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/module/(main)/wishlist/services";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface AddToWishlistProps {
  sku: string;
  isInWhishlist: boolean;
  isLarge?: boolean;
}

export default function AddToWishlist({
  sku,
  isInWhishlist,
  isLarge,
}: AddToWishlistProps) {
  const [wishlisted, setWishlisted] = useState<boolean>(isInWhishlist);
  const router = useRouter();
  const pathname = usePathname();
  const { sendRequest } = useHttpClient();
  const [hover, setHover] = useState<boolean>(false);

  const addToWishlistHandler = async () => {
    const status = await sendRequest(addToWishlist({ sku }));
    console.log("wishlisted: ", sku);
    if (status) {
      setWishlisted(true);
    }
  };

  const removeToWishlistHandler = async () => {
    const status = await sendRequest(removeFromWishlist(sku));
    if (status) {
      setWishlisted(false);
      if (pathname == webRoutes.wishlist) {
        router.refresh();
      }
    }
  };

  const wishlistClickHandler = () => {
    if (wishlisted) {
      removeToWishlistHandler();
    } else {
      addToWishlistHandler();
    }
  };

  return (
    <button className="group flex justify-end" onClick={wishlistClickHandler}>
      {!wishlisted ? (
        <BsHeartFill
          size={isLarge ? 32 : 20}
          className="text-gray-300 hover:text-danger transition-all duration-150 ease-in-out "
        />
      ) : (
        <BsHeartFill
          size={isLarge ? 32 : 20}
          className="text-danger hover:text-gray-200 transition-all duration-150 ease-in-out "
        />
      )}
    </button>
  );
}
