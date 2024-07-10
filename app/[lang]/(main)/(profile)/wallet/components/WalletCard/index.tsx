"use client";
import React, { useContext } from "react";
import { IWalletHistory } from "../../../types";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { LANGUAGES } from "@/lib/enums";

interface Props {
  wallet: IWalletHistory;
}
function WalletCard({ wallet }: Props) {
  const { translate, language } = useContext(AuthContext);
  const getCustomDate = (dateStr: string): { day: number; month: string } => {
    const date = new Date(dateStr);
    const dayOfMonth = date.getDate();
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const startDay = startOfMonth.toLocaleString(language, {
      month: language === LANGUAGES.ENGLISH ? "short" : "long",
    });
    return { day: dayOfMonth, month: startDay };
  };
  console.log("history wallet", wallet);

  const isDeposit = (h: IWalletHistory) => {
    return parseFloat(h.new_wallet) > parseFloat(h.old_wallet);
  };

  return (
    <div className="shadow-xl border gap-4 mb-3 overflow-hidden  rounded-2xl">
      <div className="flex  items-center justify-center gap-2 text-lg md:text-xl lg:text-2xl text-white py-2 md:py-4 bg-primary">
        <div className=" font-bold">{getCustomDate(wallet.created).day} </div>
        <div className=" font-bold"> {getCustomDate(wallet.created).month}</div>
      </div>
      <div className="flex flex-col px-2 md:px-4 py-3 md:py-4 lg:py-6">
        <div className="text-sm md:text-base font-semibold">{wallet.notes}</div>
        <h1 className="text-lg md:text-xl lg:text-2xl font-extrabold text-center my-3 md:my-4 lg:my-6">
          {Number(wallet.new_wallet) - Number(wallet.old_wallet)}
          {translate("currency")}
        </h1>
        <div className="text-base md:text-lg lg:text-xl px-3 capitalize font-bold text-primary ">
          {isDeposit(wallet) ? translate("deposit") : translate("withdraw")}
        </div>
      </div>
    </div>
  );
}

export default WalletCard;
