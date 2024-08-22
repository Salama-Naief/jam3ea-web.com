"use client";
import MainSlider from "@/components/Slider";

import Link from "next/link";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ISupplierStore } from "../../types";
import { usePathname } from "next/navigation";

interface Props {
  supplier: ISupplierStore[];
}
export default function InvetoryClient({ supplier }: Props) {
  const path = usePathname();
  const storePage = path.includes("/stores");
  return (
    <div className="my-6 pb-4">
      <MainSlider
        lgSize={7}
        mdSize={5}
        xlSize={7}
        smSize={3}
        nextIcon={BsChevronRight}
        prevIcon={BsChevronLeft}
      >
        {supplier &&
          supplier.map((supplier, i) => (
            <div key={i} className=" flex justify-center">
              <Link
                href={"/stores/" + supplier._id}
                className={`block relative ${
                  storePage
                    ? "w-32 md:w-40 h-32 md:h-40"
                    : "w-24 md:w-32 h-24 md:h-32"
                }`}
              >
                <Image
                  src={supplier.logo}
                  // width={storePage ? 150 : 130}
                  // height={storePage ? 150 : 130}
                  fill
                  className={`rounded shadow-md p-1 `}
                  alt={"supplier"}
                />
              </Link>
            </div>
          ))}
      </MainSlider>
    </div>
  );
}
