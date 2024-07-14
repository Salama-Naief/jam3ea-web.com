"use client";
import Image from "next/image";
import React, { useContext } from "react";
import logo from "../../../../../../../public/assets/logo-sm.png";
import { IOrder } from "../../../types";
import Button from "@/components/Button";
import Link from "next/link";
import webRoutes from "@/lib/utils/webRoutes";
import { format } from "date-fns";
import { AuthContext } from "@/lib/providers/AuthProvider";
import RepeatOrder from "../RepeatOrder";
import { ar, enUS } from "date-fns/locale";
import { LANGUAGES } from "@/lib/enums";
interface Props {
  order: IOrder;
}
export default function OrderCard({ order }: Props) {
  const { translate, language } = useContext(AuthContext);

  return (
    <div className="shadow-md rounded-md">
      <Link href={webRoutes.orderDetails(order._id)} className="shadow-md">
        <div className="w-full py-6 px-4 rounded-lg shadow">
          <Image src={logo} alt="jamiea" />
        </div>
        <div className="px-6">
          <h6
            className={
              ([4] as number[]).includes(order.status_number) ||
              order.status.toLowerCase() === "delivered"
                ? "text-success pt-4 font-semibold"
                : "text-danger pt-4 font-semibold"
            }
          >
            {order.status}
          </h6>
          <div className="my-2 flex gap-1 text-center font-bold">
            {order.total} {translate("currency")}
          </div>
          {order.delivery_time && (
            <div className="my-2 flex gap-1">{order.delivery_time}</div>
          )}
          <div className="my-2 flex gap-1 font-semibold">
            {/* <span className="">
              {format(new Date(order.created), "PPP", {
                locale: language === LANGUAGES.ARABIC ? ar : enUS,
              })}
            </span> */}
            <span className="">{order.created}</span>
            {/* @ts-ignore */}
            <span className="text-primary">{order.time}</span>
            {/* <span className="text-primary">
              {format(order.created, "pp", {
                locale: language === LANGUAGES.ARABIC ? ar : enUS,
              })}
            </span> */}
          </div>
          <div className="my-2 flex gap-1">
            <span>OrderId:</span>{" "}
            <span className="text-primary">{order.order_id}</span>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <RepeatOrder id={order._id} />
      </div>
    </div>
  );
}
