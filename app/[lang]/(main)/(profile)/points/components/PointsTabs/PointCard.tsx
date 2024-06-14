"use cleint";
import Image from "next/image";
import React, { useContext } from "react";
import point2walletIcon from "../../../../../../../public/assets/point2wallet.svg";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { IoIosWifi } from "react-icons/io";

interface Props {
  points: number;
  KDamount: number;
}
export default function PointCard({ KDamount, points }: Props) {
  const { translate } = useContext(AuthContext);
  return (
    <div className="relative bg-gray-50 overflow-hidden w-full flex items-end justify-end h-44 rounded-lg shadow-md ">
      <Image
        src={point2walletIcon}
        width={120}
        height={120}
        alt="poitn2wallet"
      />
      <div className="absolute flex flex-col justify-between w-full p-4 z-10 top-0 left-0 w-ful h-full">
        <h6 className="text-secondary text-end font-medium">
          {translate("cacsh_back")}
        </h6>
        <div className="flex justify-center text-xl font-bold">
          <span>{KDamount}</span>
          <span>{translate("currency")}</span>
        </div>
        <div className="text-start px-2">
          <div className=" font-bold mb-1">
            {points + " " + translate("points")}
          </div>
          <IoIosWifi className="text-primary" size={25} />
        </div>
      </div>
    </div>
  );
}
