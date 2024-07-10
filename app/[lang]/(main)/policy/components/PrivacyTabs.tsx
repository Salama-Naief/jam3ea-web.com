"use client";

import { useContext } from "react";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { Tab } from "@headlessui/react";

export default function PrivacyTabs() {
  const { translate } = useContext(AuthContext);
  return (
    <Tab.Group>
      <Tab.List className="border-gray-200 bg-white pt-2 flex justify-center">
        <Tab
          className={({ selected }) =>
            selected
              ? " border-b-2 px-4 py-2 border-primary text-primary"
              : "text-black px-4 py-2"
          }
        >
          {translate("policy")}
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? " border-b-2 px-4 py-2 border-primary text-primary"
              : "text-black px-4 py-2"
          }
        >
          {translate("privacy")}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className={"py-5"}>
          <div className="rounded-lg mb-4">
            <div className="bg-secondary text-white px-6 font-bold py-1 md:py-3  lg:text-lg rounded-xl text-sm  w-fit mb-2 md:mb-3 lg:mb-4 ">
              {translate("delivery_policy")}
            </div>
            <div className="bg-[#FFF7F0] text-sm md:text-base p-2 rounded-b-lg whitespace-pre-line">
              {translate("delivery_policy_content")}
            </div>
          </div>

          <div className=" rounded-lg mb-4">
            <div className="bg-secondary text-white px-6 font-bold py-1 md:py-3  lg:text-lg rounded-xl text-sm  w-fit mb-2 md:mb-3 lg:mb-4 ">
              {translate("delivery_return_policy")}
            </div>
            <div className="bg-[#FFF7F0] text-sm md:text-base p-2 rounded-b-lg whitespace-pre-line">
              {translate("delivery_return_policy_content")}
            </div>
          </div>

          <div className=" rounded-lg mb-4">
            <div className=" bg-secondary text-white px-6 font-bold py-1 md:py-3  lg:text-lg rounded-xl text-sm  w-fit mb-2 md:mb-3 lg:mb-4 ">
              {translate("exchange_or_return")}
            </div>
            <div className="bg-[#FFF7F0] text-sm md:text-base p-2 rounded-b-lg whitespace-pre-line">
              {translate("exchange_or_return_content")}
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className=" rounded-lg mb-4">
            <div className="bg-secondary text-white px-6 font-bold py-1 md:py-3  lg:text-lg rounded-xl text-sm  w-fit mb-2 md:mb-3 lg:mb-4 ">
              {translate("data_collected")}
            </div>
            <div className="bg-[#FFF7F0] text-sm md:text-base p-2 rounded-b-lg whitespace-pre-line">
              {translate("data_collected_content")}
            </div>
          </div>

          <div className=" rounded-lg mb-4">
            <div className="bg-secondary text-white px-6 font-bold py-1 md:py-3  lg:text-lg rounded-xl text-sm  w-fit mb-2 md:mb-3 lg:mb-4 ">
              {translate("data_collection_use")}
            </div>
            <div className="bg-[#FFF7F0] text-sm md:text-base p-2 rounded-b-lg whitespace-pre-line">
              {translate("data_collection_use_content")}
            </div>
          </div>

          <div className=" rounded-lg mb-4">
            <div className="bg-secondary text-white px-6 font-bold py-1 md:py-3  lg:text-lg rounded-xl text-sm  w-fit mb-2 md:mb-3 lg:mb-4 ">
              {translate("data_security")}
            </div>
            <div className="bg-[#FFF7F0] text-sm md:text-base p-2 rounded-b-lg whitespace-pre-line">
              {translate("data_security_content")}
            </div>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
