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
        <div className="md:px-4  py-4">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3  rounded-md bg-gray-100 px-6 py-12">
            <div className="lg:col-span-2">
              <h1 className="text-primary text-3xl md:text-3xl lg:text-4xl font-bold">
                {typeof supplier.delivery_time_text === "object"
                  ? lang === "ar"
                    ? supplier.delivery_time_text.ar
                    : supplier.delivery_time_text.en
                  : supplier.delivery_time_text + supplier.app_delivery_time}
              </h1>
              <div className="flex gap-4 md:justify-start items-center my-10">
                <span className="text-3xl font-bold">
                  {supplier.shipping_cost} K.D
                </span>
                <TbTruckDelivery size={60} className="text-primary" />
              </div>
            </div>
            {supplier.picture && (
              <div className="col-span-1 relative w-full md:w-full lg:w-96 h-40 md:h-full">
                <Image
                  src={supplier.picture}
                  // width={300}
                  // height={300}
                  fill
                  className="rounded"
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
