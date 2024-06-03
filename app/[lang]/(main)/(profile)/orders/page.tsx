import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import OrdersHistory from "./components/OrdersHistory";
import { IDataLoadedResponse } from "@/lib/types";
import { IOrder } from "../types";
import apiHandler from "@/lib/utils/apiHandler";
import { getDictionary } from "@/lib/utils/dictionary";
import { Locale } from "../../../../../i18n-config";
import { translate } from "@/lib/utils/serverHelpers";
import Breadcrumbs from "@/components/Breadcrumbs";
import { LANGUAGES } from "@/lib/enums";
import { ar, enUS } from "date-fns/locale";
import { formatDate } from "date-fns";

export default async function Orders({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const ordersResponse: IDataLoadedResponse<IOrder> = await apiHandler(
    "/order",
    "GET",
    undefined,
    true,
    false
  );
  let orders: IOrder[] = [];
  const dict = await getDictionary(lang);
  if (ordersResponse) {
    orders = ordersResponse.data.map((o) => ({
      ...o,
      created: formatDate(o.created, "PPP", {
        locale: lang === LANGUAGES.ARABIC ? ar : enUS,
      }),
      time: formatDate(o.created, "p", {
        locale: lang === LANGUAGES.ARABIC ? ar : enUS,
      }),
    }));
  }

  const links = [
    { label: translate(dict, dict.home), link: "/" },
    { label: translate(dict, dict.orders), link: "/orders" },
  ];
  return (
    <div>
      <Container>
        <Breadcrumbs items={links} />
        <div>
          <OrdersHistory dict={dict} orders={orders} />
        </div>
      </Container>
    </div>
  );
}
