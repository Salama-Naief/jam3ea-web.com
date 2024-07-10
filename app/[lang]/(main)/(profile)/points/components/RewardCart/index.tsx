import { IProduct } from "@/module/(main)/product/types";
import Image from "next/image";
import React from "react";
import { IProductReward } from "../../types";

interface Props {
  product: IProductReward;
}
export default function RewardProductCart({ product }: Props) {
  return (
    <div className="shadow-md p-3 rounded-lg">
      <Image
        src={product.product.picture}
        width={150}
        height={200}
        alt={product.product.name}
        className="bg-gray-200"
      />
      <div>
        <h6 className="font-bold text-sm lg:text-base pt-2">{product.title}</h6>
        <h6 className="font-semibold text-sm lg:text-base py-2">
          Replace {product.points} points
        </h6>
        {/* {product.description && (
          <div className="-indent-4 h-5 overflow-hidden">
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
        )} */}
      </div>
    </div>
  );
}
