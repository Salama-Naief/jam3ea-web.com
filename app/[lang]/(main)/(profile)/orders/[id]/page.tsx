import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { Locale } from "../../../../../../i18n-config";
import apiHandler from "@/lib/utils/apiHandler";
import { IOrder } from "../../types";
import {
  MapPinIcon,
  PhoneArrowDownLeftIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import { getPriceWithCurrency } from "@/module/(main)/product/utils";
import Link from "next/link";
import webRoutes from "@/lib/utils/webRoutes";
import RepeatOrder from "../components/RepeatOrder";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  MdAccessTime,
  MdLocalPhone,
  MdLocationOn,
  MdPerson,
} from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { format } from "date-fns";
import Image from "next/image";
import { Rating } from "@mantine/core";
import { LANGUAGES } from "@/lib/enums";
import { ar, enUS } from "date-fns/locale";

export default async function MyOrders({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale };
}) {
  let order: IOrder = await apiHandler("/order/" + id);

  const dict = await getDictionary(lang);

  const links = [
    { label: translate(dict, dict.home), link: "/" },
    { label: translate(dict, dict.orders), link: "/orders" },
    { label: translate(dict, dict.order_details), link: "/orders/" + id },
  ];
  return (
    <div>
      <Container>
        <Breadcrumbs items={links} />

        <div>
          <div className="mb-6">
            {/* personal datials */}
            <div className=" rounded-lg p-2 flex justify-start gap-8 mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-gray-100 text-gray-400">
                  <MdPerson size={28} />
                </div>
                <div className="text-secondary font-semibold">
                  {order.user_data.fullname}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-gray-100 text-gray-400">
                  <MdLocalPhone size={28} />
                </div>
                <div className="text-secondary font-semibold">
                  {order.user_data.mobile}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-gray-100 text-gray-400">
                  <MdLocationOn size={28} />
                </div>
                <div className="text-secondary font-semibold">
                  {translate(dict, "delivery_address")}:{" "}
                  {order.user_data.city_name}, {translate(dict, "block")}{" "}
                  {order.user_data.address.widget}, {translate(dict, "street")}{" "}
                  {order.user_data.address.street}, {translate(dict, "house")}{" "}
                  {order.user_data.address.house}
                </div>
              </div>
            </div>
            {/* deliver date details */}
            <div className=" rounded-lg p-2 flex justify-start gap-8 mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-gray-100 text-gray-400">
                  <MdAccessTime size={28} />
                </div>
                <div className="text-secondary font-semibold">
                  {format(order.created, "p", {
                    locale: lang === LANGUAGES.ARABIC ? ar : enUS,
                  })}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-gray-100 text-gray-400">
                  <RxCalendar size={25} />
                </div>
                <div className="text-secondary font-semibold">
                  {format(order.created, "PPP", {
                    locale: lang === LANGUAGES.ARABIC ? ar : enUS,
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* order status and deliver store */}

          <h1 className="text-2xl font-extrabold flex gap-2">
            <span> {translate(dict, "receipt")}</span>
            <span className="text-primary">Jm3eia</span>
          </h1>

          {/* order details */}
          <div className="grid grid-cols-2 gap-6 items-start">
            <div className="p-4 shadow-md rounded-lg">
              {Object.values(order.products)
                .flat()
                .map((p) => (
                  <div key={p.sku} className="flex items-center gap-4 ">
                    <div className="w-fit p-2 rounded h-fit shadow-md">
                      <Image
                        src={p.picture}
                        width={150}
                        height={200}
                        alt={p.name}
                      />
                    </div>

                    <div className="font-bold">
                      <div className="flex gap-1 items-center justify-between">
                        <div>{p.name}</div>
                      </div>
                      <div>
                        <span className="text-primary ">
                          {translate(dict, "quantity")}:
                        </span>
                        {p.quantity}
                      </div>
                      <div className="text-secondary">
                        {getPriceWithCurrency(
                          p.price,
                          translate(dict, "currency")
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div>
              <div className="p-6 shadow-md rounded-lg">
                <div className="flex items-center justify-between text-primary">
                  <span className="font-bold">
                    {translate(dict, "order_summary")}
                  </span>
                  <span
                    className={
                      ([4] as number[]).includes(order.status_number) ||
                      order.status.toLowerCase() === "delivered"
                        ? "text-success "
                        : "text-danger "
                    }
                  >
                    {order.status}
                  </span>
                </div>
                {/* sub total */}
                <div className="flex items-center justify-between text-gray-400 my-3">
                  <span className="">{translate(dict, "subtotal")}</span>
                  <span>
                    {order.subtotal}
                    {translate(dict, "currency")}
                  </span>
                </div>
                {/* shipping const */}
                <div className="flex items-center justify-between text-gray-400 my-3">
                  <span className="">{translate(dict, "shipping_cost")}</span>
                  <span>
                    {order.shipping_cost}
                    {translate(dict, "currency")}
                  </span>
                </div>
                {/* donation */}
                <div className="flex items-center justify-between text-gray-400 my-3">
                  <span className="">{translate(dict, "donation")}</span>
                  <span>
                    {order.coupon.value}
                    {translate(dict, "currency")}
                  </span>
                </div>
                {/* discount */}
                <div className="flex items-center justify-between text-gray-400 my-3">
                  <span className="">{translate(dict, "discount")}</span>
                  <span>
                    {order.discount_by_wallet_value}
                    {translate(dict, "currency")}
                  </span>
                </div>
                {/* total */}
                <div className="flex items-center font-bold justify-between bg-gray-100  rounded p-3">
                  <span className="">{translate(dict, "total")}</span>
                  <span className="text-primary">
                    {order.total}
                    {translate(dict, "currency")}
                  </span>
                </div>
              </div>
              {/* rate */}
              <div className="flex items-center justify-between my-6">
                <span className="font-bold text-secondary">Rate Driver</span>
                <Rating readOnly defaultValue={4} size={"md"} />
              </div>

              <div className="flex gap-4 items-center">
                <RepeatOrder id={order._id} />
                <Link
                  href={"/"}
                  className="px-6 py-2 rounded-md  text-primary shadow-md"
                >
                  {translate(dict, "back_to_home")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
