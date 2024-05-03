'use client';

import useHttpClient from '@/lib/hooks/useHttpClient';
import webRoutes from '@/lib/utils/webRoutes';
import { addToWishlist, removeFromWishlist } from '@/module/wishlist/services';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

interface AddToWishlistProps {
  sku: string;
  isInWhishlist: boolean;
}

export default function AddToWishlist({
  sku,
  isInWhishlist,
}: AddToWishlistProps) {
  const [wishlisted, setWishlisted] = useState<boolean>(isInWhishlist);
  const router = useRouter();
  const pathname = usePathname();
  const { sendRequest } = useHttpClient();

  const addToWishlistHandler = async () => {
    const status = await sendRequest(addToWishlist({ sku }));
    console.log('wishlisted: ', sku);
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
    <button className="group" onClick={wishlistClickHandler}>
      {!wishlisted && (
        <img
          className="group-hover:hidden"
          src="/assets/like-inactive.svg"
          alt=""
        />
      )}

      <img
        className={`${wishlisted ? '' : 'hidden'} group-hover:block`}
        src="/assets/like-active.svg"
        alt=""
      />
    </button>
  );
}
