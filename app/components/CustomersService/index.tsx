"use client";
import { LANGUAGES } from "@/lib/enums";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { IUser } from "@/module/(main)/(profile)/types";
import React, { useContext } from "react";
import { RiCustomerService2Fill } from "react-icons/ri";

interface Props {
  user?: IUser;
  dict: any;
}
function CustomerService() {
  const { translate, language } = useContext(AuthContext);

  return (
    <a
      href="https://direct.lc.chat/12012687/"
      target="_blank"
      className={`${
        language === LANGUAGES.ARABIC ? "end-8" : "end-8"
      } fixed flex flex-col w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 items-center z-10 justify-center bottom-8 border border-secondary p-3 rounded-full bg-gray-100 shadow-md`}
    >
      <div className="w-2.5 h-2.5 rounded-full bg-green-500 absolute top-2 start-4"></div>
      <RiCustomerService2Fill size={45} className="text-secondary" />
      <span className="text-xs lg:text-sm text-secondary hidden md:block">
        {translate("chat")}
      </span>
    </a>
  );
}

export default CustomerService;
