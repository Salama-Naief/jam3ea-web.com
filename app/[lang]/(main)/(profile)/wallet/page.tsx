import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import WalletTabs from "./components/WalletTabs";
import { Locale } from "../../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import apiHandler from "@/lib/utils/apiHandler";
import { IDataLoadedResponse } from "@/lib/types";
import { IUser, IWalletHistory } from "../types";
import { translate } from "@/lib/utils/serverHelpers";
import SharedLayout from "../components/SharedLayout";

export default async function WalletPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const history: IDataLoadedResponse<IWalletHistory> = await apiHandler(
    "/profile/wallet_history"
  );

  const user: IUser = await apiHandler("/profile");

  return (
    <div>
      <SharedLayout user={user} title={`My Wallet (${user.wallet})`}>
        <div className="bg-white px-2 pb-4 rounded-2xl rounded-b-none min-h-screen h-full">
          {history && history.data && <WalletTabs history={history.data} />}
        </div>
      </SharedLayout>
    </div>
  );
}
