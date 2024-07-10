"use client";
import React, { useContext } from "react";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { LANGUAGES } from "@/lib/enums";
import { IPoint } from "../types";

interface Props {
  point: IPoint;
}
function HistoryPointCard({ point }: Props) {
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

  return (
    <div className="shadow-xl border gap-4 mb-3 overflow-hidden  rounded-2xl">
      <div className="flex  items-center justify-center gap-2 text-base md:text-lg lg:text-xl text-white py-2 lg:py-3 bg-primary">
        <div className=" font-bold">{getCustomDate(point.created).day} </div>
        <div className=" font-bold"> {getCustomDate(point.created).month}</div>
      </div>
      <div className="flex flex-col px-4 py-2 lg:py-4 bg-gray-50">
        <div className="text-sm lg:text-base font-semibold">{point.notes}</div>
        <h1 className="text-lg md:text-xl lg:text-2xl font-extrabold text-center my-2 lg:my-4">
          {Number(point.new_points) - Number(point.old_points)}
        </h1>
        <div className="md:text-lg lg:text-xl px-3 capitalize font-bold text-primary ">
          {point.type}
        </div>
      </div>
    </div>
  );
}

export default HistoryPointCard;
