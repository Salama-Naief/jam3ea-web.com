import { IUser } from "@/module/(main)/(profile)/types";
import { Locale } from "../../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import Link from "next/link";
import webRoutes from "@/lib/utils/webRoutes";

interface ThankYouProps {
  user_data: IUser;
  lang: Locale;
  orderId: string;
}

export default async function ThankYou({
  user_data,
  lang,
  orderId,
}: ThankYouProps) {
  const dict = await getDictionary(lang);
  return (
    <div className="bg-secondary pt-[6rem]">
      <div className="flex items-center justify-center flex-col">
        <img src="/assets/logo-light.svg" width={200} alt="" />
        <div className="bg-white sm:w-[400px] w-full mt-12 rounded-t-3xl h-screen p-3 pt-6">
          <div className="text-lg font-bold text-center">
            {translate(dict, "order_has_been_taken")}
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
            <div className="text-sm">
              {translate(dict, "city")}:{" "}
              {typeof user_data.address.city?.name === "object"
                ? user_data.address.city?.name.en
                : user_data.address.city?.name}
            </div>
            <div className="text-sm">
              {translate(dict, "block")}: {user_data.address.widget}
            </div>
            <div className="text-sm">
              {translate(dict, "street")}: {user_data.address.street}
            </div>
            <div className="text-sm">
              {translate(dict, "house")}: {user_data.address.house}
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <Link
              href={webRoutes.orderDetails(orderId)}
              className="bg-success text-white py-2 px-4 text-sm rounded-2xl w-full block text-center"
            >
              {translate(dict, "view_order_details")}
            </Link>
            <Link
              href={webRoutes.home}
              className="bg-primary text-white py-2 px-4 text-sm rounded-2xl w-full block text-center"
            >
              {translate(dict, "continue_shopping")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
