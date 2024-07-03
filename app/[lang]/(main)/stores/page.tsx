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
import Suppliers from "./conponents/Suppliers";
import SuppliersClient from "./conponents/Suppliers/SupplierClient";

export default async function StoresPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const inventories = await getInventories();
  const stores =
    inventories && inventories.data && inventories.data.length === 1
      ? inventories.data
      : [];
  const supplier = await getSupplierFeature();
  console.log("supplier", supplier);
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
          {/* <Link href={webRoutes.home}>
            <img src={`/assets/mart/${lang}.jpg`} className="mb-2" alt="Mart" />
          </Link> */}
          {inventories && inventories.data && inventories.data.length && (
            <h1 className="text-primary text-2xl font-bold my-6">
              {translate(dict, dict.jameia_stores)}
            </h1>
          )}
          {inventories && inventories.data && inventories.data.length > 0 && (
            <div className="w-full ">
              <Image
                src={inventoriesImage}
                // width={1200}
                // height={720}
                className="mx-auto"
                alt={"inventories"}
              />
            </div>
          )}
          <div className="flex justify-between items-center">
            {/* <h2 className="font-bold text-lg">{translate(dict, "stores")}</h2> */}
            {/* <div className="flex gap-2">
              <button>
                <TableCellsIcon className="w-4 h-4 text-primary" />
              </button>
              <button>
                <ListBulletIcon className="w-4 h-4 text-primary" />
              </button>
            </div> */}
          </div>
          <div className="">
            {supplier &&
              supplier.map((store, i) => (
                <SuppliersClient key={i} supplier={store} />
                // <Link
                //   key={store._id}
                //   href={webRoutes.store(store._id)}
                //   className="flex gap-3 items-center justify-center rounded-md overflow-hidden shadow-md"
                // >
                //   <div className="relative w-full aspect-square ">
                //     <Image
                //       src={store.logo}
                //       // width={100}
                //       // height={100}
                //       fill
                //       alt={
                //         typeof store.name === "object"
                //           ? store.name.en
                //           : store.name
                //       }
                //     />
                //   </div>
                //   {/* <div className="flex flex-col gap-1">
                //     <div>
                //       {typeof store.name === "object"
                //         ? store.name.en
                //         : store.name}
                //     </div>
                //     <div className="text-sm text-gray-400">
                //       {store.description}
                //     </div>
                //     <div className="flex items-center">
                //       <StarIcon className="text-primary w-4 h-4" />
                //       {store.avg_rating}{" "}
                //       <span className="text-gray-400 text-sm">
                //         ({store.reviews_count})
                //       </span>
                //     </div>
                //     <div className="flex items-center justify-between">
                //       <div className="flex items-center">
                //         <ClockIcon className="text-gray-400 w-4 h-4" />{" "}
                //         <span className="text-sm">
                //           {getDeliveryTime(store.app_delivery_time, dict)}
                //         </span>
                //       </div>
                //       <div className="flex items-center">
                //         <TruckIcon className="text-gray-400 w-4 h-4" />{" "}
                //         <span className="text-sm">
                //           {getPriceWithCurrency(
                //             store.shipping_cost,
                //             translate(dict, "currency")
                //           )}
                //         </span>
                //       </div>
                //     </div>
                //   </div> */}
                // </Link>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
