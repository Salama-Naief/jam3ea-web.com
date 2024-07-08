"use client";

import useHttpClient from "@/lib/hooks/useHttpClient";
import { FormEvent, MouseEventHandler, useState } from "react";
import { IApplyCoupon, IApplyCouponResponseResult, ICoupon } from "../types";
import { applyCoupon, removeCoupon } from "../services";
import { useRouter } from "next/navigation";
import { TrashIcon } from "@heroicons/react/24/outline";
import Input from "@/components/Input";

interface ApplyCouponProps {
  coupon: { code: string | null; value: string };
  dictionary: {
    apply: string;
    have_coupon: string;
  };
}

export default function ApplyCoupon({ coupon, dictionary }: ApplyCouponProps) {
  const [code, setCode] = useState("");
  const { sendRequest, isLoading } = useHttpClient<
    IApplyCouponResponseResult,
    IApplyCoupon
  >();

  const { sendRequest: removeCouponRequest } = useHttpClient<
    IApplyCouponResponseResult,
    IApplyCoupon
  >();

  const router = useRouter();

  const addCoupoHandler = async () => {
    const status = await sendRequest(applyCoupon({ code }));
    if (status) {
      router.refresh();
      setCode("");
    }
  };

  const removeCouponHandler = async (code: string) => {
    const status = await removeCouponRequest(removeCoupon({ code }));
    if (status) {
      router.refresh();
    }
  };

  return (
    <div className="w-full">
      <div className="flex py-4 px-6 rounded-xl bg-white gap-3 items-center justify-center w-full  mb-3">
        {/* <input
          type="text"
          className="border-0 p-0 ring-0 focus:border-0 focus:outline-0"
          placeholder={dictionary.have_coupon}
          onChange={(e) => {
            if (e.target.value && e.target.value != "") {
              setCode(e.target.value);
            }
          }}
        /> */}
        <input
          type={"text"}
          name={"coupon"}
          value={code}
          placeholder={dictionary.have_coupon}
          onChange={(e) => {
            if (e.target.value && e.target.value != "") {
              setCode(e.target.value);
            }
          }}
          className={`
                  peer
                  w-full
                  p-1.5
                  px-4  
                  relative
                  bg-gray-100 
                  border
                  rounded-md
                  outline-none
                  transition
                  disabled:opacity-70
                  disabled:cursor-not-allowed
                  text-start
                  ring-0 focus:ring-0
                  focus:border-primary
                  border-transparent
                `}
        />
        <button
          type="button"
          disabled={isLoading}
          className="bg-primary text-white hover:bg-orange-400 hover:text-white py-2 px-4 h-auto text-sm  shadow-md rounded-xl"
          onClick={addCoupoHandler}
        >
          {dictionary.apply}
        </button>
      </div>
      {/* {coupon.suppliers_coupons && coupon.suppliers_coupons.length > 0 && (
        <>
          <hr className="mx-3 my-2" />
          <div className="mx-auto pt-3 px-3">
            {coupon.suppliers_coupons.map((c) => (
              <button
                key={c.code}
                type="button"
                className="bg-primary-soft flex gap-2 items-center justify-center p-2 rounded-full"
                onClick={() => removeCouponHandler(c.code)}
              >
                {c.code} <TrashIcon className="text-danger w-4 h-4" />
              </button>
            ))}
          </div>
        </>
      )} */}
    </div>
  );
}
