"use client";
import { IProduct } from "@/module/(main)/product/types";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { IProductReward } from "../../types";
import { translate } from "@/lib/utils/serverHelpers";
import { AuthContext } from "@/lib/providers/AuthProvider";
import Button from "@/components/Button";
import Popup from "@/components/Popup";
import { getPriceWithCurrency } from "@/module/(main)/product/utils";
import { IUser } from "../../../types";
import { sendReward } from "../../services";
import useHttpClient from "@/lib/hooks/useHttpClient";
import { clientRequest } from "@/lib/utils/helpers";

interface Props {
  product: IProductReward;
  user?: IUser;
}
export default function RewardProductCart({ product, user }: Props) {
  const { translate, language } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOnClient, setIsOnClient] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  // const { sendRequest, isLoading } = useHttpClient<any, any>();
  // console.log("user", user);
  useEffect(() => {
    setIsOnClient(true);
  }, []);
  // if (!user) {
  //   return <div></div>;
  // }

  const close = () => {
    setIsOpen(false);
    setMessage("");
    setIsLoading(false);
  };
  const handleReward = async () => {
    setIsLoading(true);
    const res = await clientRequest("/reward", "POST", {
      reward_id: product._id,
    });
    console.log("status", res);
    if (res.success) {
      setMessage(res.results.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="shadow-md flex flex-col p-3 rounded-lg">
      <div className="flex-1">
        <Image
          src={product.product.picture}
          width={150}
          height={200}
          alt={product.product.name}
          className="bg-gray-200"
        />
        <div>
          <h6 className="font-bold text-sm lg:text-base pt-2">
            {product.title}
          </h6>
          <h6 className="font-semibold text-sm lg:text-base py-2">
            {translate("replace")} {product.points} {translate("points")}
          </h6>
          {/* {product.description && (
          <div className="-indent-4 h-5 overflow-hidden">
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
          )} */}
        </div>
      </div>
      {user && Number(user.points) > Number(product.points) && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white w-full py-1 rounded-lg"
        >
          {translate("replace")}
        </button>
      )}
      {isOpen ? (
        <Popup isOpen={isOpen} close={close}>
          {!message ? (
            <div>
              <div className="text-md py-4">
                {translate("do_you_want_to_buy_this_product_by_points")}{" "}
                {product.points} {translate("points")}
              </div>

              <div className="mt-4 flex items-center gap-4">
                <Button
                  type="button"
                  loading={isLoading}
                  //className="bg-primary p-3 rounded-full text-white w-full"
                  onClick={handleReward}
                >
                  {translate("ok")}
                </Button>
                <button
                  type="button"
                  className="py-1.5 mb-3 rounded-lg text-black w-full border border-primary"
                  onClick={close}
                >
                  {translate("cancel")}
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4 text-primary">{message}</div>
          )}
        </Popup>
      ) : (
        <div></div>
      )}
    </div>
  );
}
