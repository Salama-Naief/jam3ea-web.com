import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { getInventories, getSupplierFeature } from "./services";
import {
  ClockIcon,
  ListBulletIcon,
  StarIcon,
  TableCellsIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { getPriceWithCurrency } from "../product/utils";
import Link from "next/link";
import webRoutes from "@/lib/utils/webRoutes";
import { getDeliveryTime } from "./utils";
import { getDictionary } from "@/lib/utils/dictionary";
import { Locale } from "../../../../i18n-config";
import { translate } from "@/lib/utils/serverHelpers";
import NoteBar from "@/components/NoteBar";
import { listStores } from "../../../../dummyData";
import Image from "next/image";
import inventoriesImage from "../../../../public/assets/inventories.png";
import SuppliersClient from "./conponents/Suppliers/SupplierClient";

export default async function StoresPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const inventories = await getInventories();
  const supplier = await getSupplierFeature();
  console.log("supplier===++++", supplier);
  //const stores = listStores.results.data[0];

  // Grouping function
  // const res = function groupBy(array: any, key: string) {
  //   return array.reduce((acc: any, obj: any) => {
  //     const category = obj[key];
  //     if (!acc[category]) {
  //       acc[category] = [];
  //     }
  //     acc[category].push(obj);
  //     return acc;
  //   }, {});
  // };

  // const res = Object.groupBy(stores, ({ description }) => description);
  // console.log("stores", res(stores, "description"));
  const dict = await getDictionary(lang);

  return (
    <div>
      <Container>
        <div>
          {supplier && supplier.length > 0 && (
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary my-4 md:my-6">
              {translate(dict, dict.jameia_stores)}
            </h1>
          )}
          {supplier && supplier.length > 0 && (
            <div className="w-full ">
              <Image
                src={inventoriesImage}
                className="mx-auto rounded-md"
                alt={"inventories"}
              />
            </div>
          )}
          <div className="flex justify-between items-center"></div>
          <div className="">
            {supplier &&
              supplier.map((store, i) =>
                store.suppliers && store.suppliers.length > 0 ? (
                  <SuppliersClient key={i} supplierFeature={store} />
                ) : null
              )}
          </div>
        </div>
      </Container>
    </div>
  );
}
