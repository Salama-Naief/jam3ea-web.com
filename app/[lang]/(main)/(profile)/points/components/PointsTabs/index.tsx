"use client";

import { useContext } from "react";
import { Disclosure, Tab } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { LANGUAGES } from "@/lib/enums";

import { handleClientScriptLoad } from "next/script";
import { IPoint, IProductReward } from "../../types";
import HistoryPointCard from "../HistoryPointCard";
import PointsCards from "../PointsCards";
import { IProduct } from "@/module/(main)/product/types";
import RewardProductCart from "../RewardCart";
import { IUser } from "../../../types";

interface WalletTabsProps {
  points: IPoint[];
  productReward: IProductReward[];
  user?: IUser;
}

export default function PointsTabs({
  points,
  productReward,
  user,
}: WalletTabsProps) {
  const { translate, language } = useContext(AuthContext);

  return (
    <Tab.Group>
      <Tab.List className="border-gray-200 bg-white pt-2">
        <Tab
          className={({ selected }) =>
            selected
              ? "px-3 md:px-4 lg:px-8 text-sm lg:text-base py-2 font-bold bg-primary rounded text-white mx-2"
              : "text-black bg-gray-200 font-bold rounded  px-3 md:px-4 lg:px-8 text-sm lg:text-base py-2 mx-2"
          }
        >
          {translate("redeem_fund_points")}
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? " px-3 md:px-4 lg:px-8 text-sm lg:text-base  py-2 font-bold bg-primary active:outline-none !ring-0 !border-none rounded text-white mx-2"
              : "text-black bg-gray-200 font-bold rounded  px-3 md:px-4 lg:px-8 text-sm lg:text-base py-2 mx-2"
          }
        >
          {translate("my_points_history")}
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? " px-3 md:px-4 lg:px-8 text-sm lg:text-base mt-4 md:mt-0 py-2 font-bold bg-primary rounded text-white mx-2"
              : "text-black bg-gray-200 font-bold rounded  px-3 md:px-4 lg:px-8 text-sm lg:text-base mt-4 md:mt-0 py-2 mx-2"
          }
        >
          {translate("transfer_to_cash")}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className={"py-5"}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {productReward.map((product) => (
              <RewardProductCart
                user={user}
                key={product._id}
                product={product}
              />
            ))}
          </div>
        </Tab.Panel>
        <Tab.Panel className={"py-5 grid grid-cols-2 md:grid-cols-3 gap-4"}>
          {points.length > 0 ? (
            points.map((p) => <HistoryPointCard key={p._id} point={p} />)
          ) : (
            <div className="h-32 w-full flex items-center justify-center">
              No items
            </div>
          )}
        </Tab.Panel>
        <Tab.Panel className={"py-5 "}>
          <PointsCards />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
