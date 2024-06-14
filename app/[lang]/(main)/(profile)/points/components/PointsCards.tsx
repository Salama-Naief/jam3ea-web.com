"use client";

import Popup from "@/components/Popup";
import useHttpClient from "@/lib/hooks/useHttpClient";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { getPriceWithCurrency } from "@/module/(main)/product/utils";
import { useEffect, useContext, useState } from "react";
import { convertPointsToWallet } from "../../services";
import Button from "@/components/Button";
import PointCard from "./PointsTabs/PointCard";
import { useRouter } from "next/navigation";

export default function PointsCards() {
  const { translate } = useContext(AuthContext);
  const { sendRequest, isLoading } = useHttpClient();
  const [selectedPoints, setSelectedPoints] = useState({ points: 0, value: 0 });
  const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   document.body.classList.add("!bg-primary");
  // });
  const router = useRouter();

  const close = () => setIsOpen(false);

  const convertPoints = (points: number, value: number) => {
    setSelectedPoints({ points, value });
    setIsOpen(true);
  };

  const pointsToWaller = async () => {
    const status = await sendRequest(
      convertPointsToWallet({ points: selectedPoints.points })
    );
    if (status) {
      router.refresh();
      close();
    }
  };

  const point2WalletArray = [
    {
      points: 100,
      KDamount: 1,
    },
    {
      points: 200,
      KDamount: 4,
    },
    {
      points: 300,
      KDamount: 8,
    },
    {
      points: 400,
      KDamount: 12,
    },
    {
      points: 500,
      KDamount: 20,
    },
    {
      points: 800,
      KDamount: 40,
    },
    {
      points: 1000,
      KDamount: 80,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 w-full gap-4  px-2 py-4 rounded-2xl rounded-b-none">
        {point2WalletArray.map((item, i) => (
          <button
            key={i}
            onClick={() => convertPoints(item.points, item.KDamount)}
            className=""
          >
            <PointCard KDamount={item.KDamount} points={item.points} />
          </button>
        ))}
      </div>
      <Popup isOpen={isOpen} close={close}>
        <div className="text-md py-4">
          {translate("do_you_want_to_transfer")} {selectedPoints.points}{" "}
          {translate("points")} {translate("to")}{" "}
          {getPriceWithCurrency(selectedPoints.value, translate("currency"))}{" "}
          {translate("credit")}
        </div>

        <div className="mt-4 flex items-center gap-4">
          <Button
            type="button"
            loading={isLoading}
            //className="bg-primary p-3 rounded-full text-white w-full"
            onClick={pointsToWaller}
          >
            {translate("ok")}
          </Button>
          <button
            type="button"
            className="py-1.5 mb-3 rounded-lg text-black w-full border border-primary"
            onClick={close}
          >
            {translate("cancel")}
          </button>
        </div>
      </Popup>
    </>
  );
}
