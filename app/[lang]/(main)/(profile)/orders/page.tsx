import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import OrdersHistory from "./components/OrdersHistory";
import { IDataLoadedResponse } from "@/lib/types";
import { IOrder } from "../types";
import apiHandler from "@/lib/utils/apiHandler";
import { getDictionary } from "@/lib/utils/dictionary";
import { Locale } from "../../../../../i18n-config";
import { translate } from "@/lib/utils/serverHelpers";

export default async function Orders({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const ordersResponse: IDataLoadedResponse<IOrder> = await apiHandler(
    "/order"
  );

  const dict = await getDictionary(lang);

  return (
    <div>
      <Navbar title={translate(dict, "orders")} />
      <Container>
        <div>
          <OrdersHistory orders={ordersResponse.data} />
        </div>
      </Container>
    </div>
  );
}
