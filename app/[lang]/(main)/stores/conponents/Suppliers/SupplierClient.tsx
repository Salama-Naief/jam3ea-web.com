"use client";
import Loader from "@/components/Loader";
import { getCategories } from "@/module/(main)/category/services";
import webRoutes from "@/lib/utils/webRoutes";
import { categories } from "../../../../../../dummyData";
import MainSlider from "@/components/Slider";

import { getInventories } from "../../services";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IInventory } from "../../types";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  inventories?: IInventory;
}
export default function SuppliersClient({ inventories }: Props) {
  const stores = inventories ? inventories.suppliers : [];
  const path = usePathname();
  const storePage = path.includes("/stores");

  return (
    <div className="my-6 pb-4">
      {inventories && (
        <h3
          className={`${
            storePage
              ? "text-black bg-gray-100 rounded-xl px-4 p-2"
              : "text-secondary pb-4"
          } text-3xl font-bold  my-4  px-6 w-fit`}
        >
          {inventories.name}
        </h3>
      )}
      <MainSlider
        lgSize={stores.length > 5 ? 5 : stores.length}
        mdSize={stores.length > 4 ? 4 : stores.length}
        xlSize={stores.length > 6 ? 6 : stores.length}
        smSize={stores.length > 3 ? 3 : stores.length}
        nextIcon={BsChevronRight}
        prevIcon={BsChevronLeft}
      >
        {categories &&
          stores.map((supplier, i) => (
            <div key={i} className=" flex justify-center">
              <Link href={"/stores/" + supplier._id} className="   block">
                <Image
                  src={supplier.logo}
                  width={storePage ? 150 : 130}
                  height={storePage ? 150 : 130}
                  className="rounded shadow-md p-1"
                  alt={"supplier"}
                />
              </Link>
            </div>
          ))}
      </MainSlider>
    </div>
  );
}
