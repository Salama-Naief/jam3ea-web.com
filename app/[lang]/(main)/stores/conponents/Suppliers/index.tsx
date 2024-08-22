import { getDictionary } from "@/lib/utils/dictionary";
import { getSuppliers } from "../../services";
import InvetoryClient from "./InventoryClient";
import { Locale } from "../../../../../../i18n-config";
import { translate } from "@/lib/utils/serverHelpers";

export default async function Suppliers({ lang }: { lang: Locale }) {
  const suppliers = await getSuppliers();

  console.log("suppliers", suppliers);
  const dict = await getDictionary(lang);
  return (
    <div className="mt-8">
      <div className="text-lg md:text-xl lg:text-3xl font-[700px] text-secondary">
        {translate(dict, dict.store_title_home)}
      </div>
      <InvetoryClient
        supplier={suppliers && suppliers.length > 0 ? suppliers : []}
      />
    </div>
  );
}
