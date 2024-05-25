import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import {
  ClockIcon,
  MapPinIcon,
  XMarkIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { Locale } from "../../../../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import apiHandler from "@/lib/utils/apiHandler";
import { IOrder } from "@/module/(main)/(profile)/types";
import { translate } from "@/lib/utils/serverHelpers";
import Link from "next/link";
import webRoutes from "@/lib/utils/webRoutes";
import { getPriceWithCurrency } from "@/module/(main)/product/utils";

export default async function TrackOrder({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale };
}) {
  const order: IOrder = await apiHandler("/order/" + id);
  const dict = await getDictionary(lang);

  return (
    <div>
      <Navbar title={translate(dict, "track_order")} />
      <Container>
        <div className="border rounded-lg p-2 flex flex-col gap-2">
          <div className="flex items-center gap-2 border-b pb-3">
            <MapPinIcon className="w-6 h-6 text-black" />
            <div className="text-gray font-semibold">
              {translate(dict, "delivery_address")}:{order.user_data.city_name},{" "}
              {translate(dict, "block")} {order.user_data.address.widget},{" "}
              {translate(dict, "street")} {order.user_data.address.street},{" "}
              {translate(dict, "house")} {order.user_data.address.house}
            </div>
          </div>
          <Link
            href={webRoutes.orderDetails(id)}
            className="text-primary py-3 w-full font-bold block text-center"
          >
            {translate(dict, "order_details")}
          </Link>
        </div>
        <div className="mb-2 mt-4">
          {translate(dict, "total")}:{" "}
          {getPriceWithCurrency(order.total, translate(dict, "currency"))}
        </div>
        <div className="px-4">
          <div className="flex items-center gap-3">
            {([4] as any).includes(order.status_number) ? (
              <div className="bg-success rounded-full p-2">
                <CheckIcon className="text-white w-6 h-6" />
              </div>
            ) : (
              <div className="bg-primary rounded-full p-2">
                <XMarkIcon className="text-white w-6 h-6" />
              </div>
            )}
            <div>{order.status}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
