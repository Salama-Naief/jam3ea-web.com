"use client";

import { useContext } from "react";
import { Disclosure, Tab } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { IWalletHistory } from "../../types";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { LANGUAGES } from "@/lib/enums";
import SendToWalletForm from "./SendToWalletForm";
import WalletCard from "./WalletCard";
import { handleClientScriptLoad } from "next/script";

interface WalletTabsProps {
  history: IWalletHistory[];
}

export default function WalletTabs({ history }: WalletTabsProps) {
  const { translate, language } = useContext(AuthContext);
  // const getCustomDate = (dateStr: string): { day: number; month: string } => {
  //   const date = new Date(dateStr);
  //   const dayOfMonth = date.getDate();
  //   const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  //   const startDay = startOfMonth.toLocaleString(language, {
  //     month: language === LANGUAGES.ENGLISH ? "short" : "long",
  //   });

  //   return { day: dayOfMonth, month: startDay };
  // };

  const isWithdraw = (h: IWalletHistory) => {
    return parseFloat(h.old_wallet) > parseFloat(h.new_wallet);
  };

  const isDeposit = (h: IWalletHistory) => {
    return parseFloat(h.new_wallet) > parseFloat(h.old_wallet);
  };

  return (
    <Tab.Group>
      <Tab.List className="border-gray-200 bg-white pt-2">
        <Tab
          className={({ selected }) =>
            selected
              ? "px-4 md:px-8 py-2 font-bold bg-primary rounded text-white mx-2"
              : "text-black bg-gray-200 font-bold rounded  px-4 md:px-8 py-2 mx-2"
          }
        >
          {translate("history")}
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "px-4 md:px-8 py-2 font-bold bg-primary rounded text-white mx-2"
              : "text-black bg-gray-200 font-bold rounded px-4  md:px-8 py-2 mx-2"
          }
        >
          {translate("deposit")}
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "px-4 md:px-8 py-2 font-bold bg-primary rounded text-white mx-2"
              : "text-black bg-gray-200 font-bold rounded px-4  md:px-8 py-2 mx-2"
          }
        >
          {translate("withdraw")}
        </Tab>
      </Tab.List>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg p-3 shadow-md mt-1 mb-4">
              <span className=" md:text-lg font-bold">
                {translate("send_credit")}
              </span>
              <div className="rounded-full p-1 shadow-md">
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  }h-5 w-5 md:h-6 md:w-6 text-gray-600`}
                />
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="pt-2 pb-2 text-sm text-gray-500">
              <SendToWalletForm />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Tab.Panels>
        <Tab.Panel
          className={"py-5 grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4"}
        >
          {history.map((h, i) => (
            <WalletCard key={h._id} wallet={h} />
          ))}
        </Tab.Panel>
        <Tab.Panel
          className={"py-5 grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4"}
        >
          {history
            .filter((h) => isDeposit(h))
            .map((h) => (
              <WalletCard key={h._id} wallet={h} />
            ))}
        </Tab.Panel>
        <Tab.Panel
          className={"py-5 grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4"}
        >
          {history
            .filter((h) => isWithdraw(h))
            .map((h) => (
              <WalletCard key={h._id} wallet={h} />
            ))}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
