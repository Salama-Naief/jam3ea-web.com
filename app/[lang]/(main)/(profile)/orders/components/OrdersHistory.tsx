"use client";
import { useContext } from "react";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { Tab } from "@headlessui/react";
import { IOrder } from "../../types";
import OrderCard from "./OrderCard";

interface OrdersHistoryProps {
  orders: IOrder[];
  dict: any;
}

export default function OrdersHistory({ orders, dict }: OrdersHistoryProps) {
  const { translate } = useContext(AuthContext);
  const ORDER_STATUSES = [
    {
      number: -1,
      text: translate(dict.all),
    },
    {
      number: 1,
      text: translate(dict.pending),
    },
    {
      number: 4,
      text: translate(dict.delivered),
    },
    {
      number: 5,
      text: translate(dict.canceled),
    },
  ];
  return (
    <Tab.Group>
      <Tab.List className=" bg-white pt-2">
        {ORDER_STATUSES.map((s) => (
          <Tab
            key={s.number}
            className={({ selected }) =>
              selected
                ? " bg-primary text-white px-2 md:px-4 lg:px-6 mx-1 md:mx-2 rounded py-2 !border-none"
                : "text-black bg-gray-200 px-2 md:px-4 lg:px-6 mx-1 md:mx-2 rounded py-2"
            }
          >
            {s.text}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {ORDER_STATUSES.map((s, i) => (
          <Tab.Panel key={i} className={"py-5"}>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  gap-4">
              {orders
                .filter(
                  (order) =>
                    s.number === -1 ||
                    order.status.toLowerCase() === s.text.toLowerCase() ||
                    order.status_number === s.number
                )
                .map((order) => (
                  <OrderCard key={order._id} order={order} />
                ))}
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
