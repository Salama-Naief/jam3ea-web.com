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

  const isWithdraw = (h: IWalletHistory) => {
    return parseFloat(h.old_wallet) > parseFloat(h.new_wallet);
  };

  const isDeposit = (h: IWalletHistory) => {
    return parseFloat(h.new_wallet) > parseFloat(h.old_wallet);
  };

  return (
    <div className="shadow-xl border gap-4 mb-3 overflow-hidden  rounded-2xl">
      <div className="flex  items-center justify-center gap-2 text-2xl text-white py-4 bg-primary">
        <div className=" font-bold">{getCustomDate(wallet.created).day} </div>
        <div className=" font-bold"> {getCustomDate(wallet.created).month}</div>
      </div>
      <div className="flex flex-col px-4 py-6">
        <div className=" text-lg font-semibold">{wallet.notes}</div>
        <h1 className="text-3xl font-extrabold text-center my-6">80.000K.D</h1>
        <div className="text-2xl px-3 capitalize font-bold text-primary ">
          {isDeposit(wallet) ? translate("deposit") : translate("withdraw")}
        </div>
      </div>
      {/* <div className="ms-auto text-base font-bold p-3">
                {isWithdraw(h) ? h.old_wallet : h.new_wallet}
              </div> */}
    </div>
  );
}

export default WalletCard;
