import Image from "next/image";
import React from "react";
import cartIcon from "../../../../public/assets/cart.svg";
import Link from "next/link";
import webRoutes from "@/lib/utils/webRoutes";

interface Props {
  length: string;
}
function Cart({ length }: Props) {
  return (
    <div className=" relative">
      <Link href={webRoutes.cart}>
        <span className="absolute -top-2 -end-2 text-sm bg-danger flex items-center justify-center text-white rounded-full w-6 h-6">
          {length}
        </span>
        <Image src={cartIcon} alt="cart" />
      </Link>
    </div>
  );
}

export default Cart;
