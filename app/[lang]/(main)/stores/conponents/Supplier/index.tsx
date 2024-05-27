import React from "react";
import { getSupplierById } from "../../services";
import { TbTruckDelivery } from "react-icons/tb";
import Image from "next/image";

interface Props {
  supplierId: string;
  lang: "en" | "ar";
}
async function Supplier({ supplierId, lang }: Props) {
  const supplier = await getSupplierById(supplierId);
  console.log("supplier -----", supplier);
  return (
    <>
      {supplier && (
        <div className="p-4 ">
          <div className="grid grid-cols-3  rounded-md bg-gray-100 px-6 py-12">
            <div className="col-span-2">
              <h1 className="text-primary text-4xl font-bold">
                {typeof supplier.delivery_time_text === "object"
                  ? lang === "ar"
                    ? supplier.delivery_time_text.ar
                    : supplier.delivery_time_text.ar
                  : supplier.delivery_time_text + supplier.app_delivery_time}
              </h1>
              <div className="flex gap-4 items-center my-10">
                <span className="text-3xl font-bold">
                  {supplier.shipping_cost} K.D
                </span>
                <TbTruckDelivery size={60} className="text-primary" />
              </div>
            </div>
            {supplier.picture && (
              <div className="col-span-1">
                <Image
                  src={supplier.picture}
                  width={300}
                  height={300}
                  alt={
                    typeof supplier.name === "object"
                      ? lang === "ar"
                        ? supplier.name.ar
                        : supplier.name.en
                      : supplier.name
                  }
                />
              </div>
            )}
          </div>
          <h1 className="text-4xl text-secondary font-extrabold text-center my-10">
            {typeof supplier.name === "object"
              ? lang === "ar"
                ? supplier.name.ar
                : supplier.name.en
              : supplier.name}
          </h1>
        </div>
      )}
    </>
  );
}

export default Supplier;
