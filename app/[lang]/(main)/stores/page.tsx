import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { getInventories } from "./services";
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

export default async function StoresPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const inventories = await getInventories();
  const stores =
    inventories && inventories.data && inventories.data.length === 1
      ? inventories.data[0].suppliers
      : [];

  const dict = await getDictionary(lang);

  return (
    <div>
      <Navbar hasAddress />
      <Container>
        <div>
          <Link href={webRoutes.home}>
            <img src={`/assets/mart/${lang}.jpg`} className="mb-2" alt="Mart" />
          </Link>
          <NoteBar
            dictionary={{
              free_points: translate(dict, "free_points"),
              free_points_description: translate(
                dict,
                "free_points_description"
              ),
            }}
          />
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">{translate(dict, "stores")}</h2>
            {/* <div className="flex gap-2">
              <button>
                <TableCellsIcon className="w-4 h-4 text-primary" />
              </button>
              <button>
                <ListBulletIcon className="w-4 h-4 text-primary" />
              </button>
            </div> */}
          </div>
          <div className="flex flex-col overflow-x-auto max-w-full py-4 gap-4">
            {stores.map((store) => (
              <Link
                key={store._id}
                href={webRoutes.store(store._id)}
                className="flex gap-3"
              >
                <img
                  src={store.logo}
                  width={100}
                  alt={
                    typeof store.name === "object" ? store.name.en : store.name
                  }
                />
                <div className="flex flex-col gap-1">
                  <div>
                    {typeof store.name === "object"
                      ? store.name.en
                      : store.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {store.description}
                  </div>
                  <div className="flex items-center">
                    <StarIcon className="text-primary w-4 h-4" />
                    {store.avg_rating}{" "}
                    <span className="text-gray-400 text-sm">
                      ({store.reviews_count})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ClockIcon className="text-gray-400 w-4 h-4" />{" "}
                      <span className="text-sm">
                        {getDeliveryTime(store.app_delivery_time, dict)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TruckIcon className="text-gray-400 w-4 h-4" />{" "}
                      <span className="text-sm">
                        {getPriceWithCurrency(
                          store.shipping_cost,
                          translate(dict, "currency")
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
