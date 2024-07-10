"use cleint";
import Image from "next/image";
import React, { useContext } from "react";
import point2walletIcon from "../../../../../../../public/assets/point2wallet.svg";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { IoIosWifi } from "react-icons/io";
import { LANGUAGES } from "@/lib/enums";

interface Props {
  points: number;
  KDamount: number;
}
export default function PointCard({ KDamount, points }: Props) {
  const { translate, language } = useContext(AuthContext);
  return (
    <div
      className={`${
        language === LANGUAGES.ARABIC
          ? "items-end justify-start"
          : "items-end justify-end"
      } relative bg-gray-50 overflow-hidden w-full flex  h-44 rounded-lg shadow-md `}
    >
      <div className="relative flex items-end  w-20 h-16 md:w-28 md:h-20 lg:w-32 lg:h-24">
        <Image
          src={point2walletIcon}
          // width={120}
          // height={120}
          fill
          alt="poitn2wallet"
          className="origin-bottom"
        />
      </div>
      <div className="absolute flex flex-col justify-between w-full p-4 z-10 top-0 left-0 w-ful h-full">
        <h6 className="text-secondary text-end font-medium">
          {translate("cacsh_back")}
        </h6>
        <div className="flex justify-center text-xl font-bold">
          <span>{KDamount}</span>
          <span>{translate("currency")}</span>
        </div>
        <div
          className={`${
            language === LANGUAGES.ARABIC
              ? "justify-end items-end"
              : "justify-start items-start"
          } flex flex-col  px-2`}
        >
          <div className=" font-bold mb-1">
            {points + " " + translate("points")}
          </div>
          <IoIosWifi className="text-primary" size={25} />
        </div>
      </div>
    </div>
  );
}
