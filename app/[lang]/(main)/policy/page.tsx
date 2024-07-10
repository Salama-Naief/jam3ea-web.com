import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import PrivacyTabs from "./components/PrivacyTabs";
import { Locale } from "../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";

export default async function MyOrders({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <Container>
        {/* <PrivacyTabs /> */}
        <div className="flex justify-center text-secondary my-6">
          <h1 className="text-lg w-fit md:text-xl lg:text-2xl font-bold text-center border-b-2 px-4 border-primary">
            {translate(dict, dict.policy)}
          </h1>
        </div>
        <div>
          <div className="rounded-lg mb-4">
            <div className="bg-secondary text-white px-6 font-bold py-1 md:py-3  lg:text-lg rounded-xl text-sm  w-fit mb-2 md:mb-3 lg:mb-4 ">
              {translate(dict, "delivery_policy")}
            </div>
            <div className="bg-[#FFF7F0] text-sm md:text-base p-2 rounded-b-lg whitespace-pre-line">
              {translate(dict, "delivery_policy_content")}
            </div>
          </div>

          <div className=" rounded-lg mb-4">
            <div className="bg-secondary text-white px-6 font-bold py-1 md:py-3  lg:text-lg rounded-xl text-sm  w-fit mb-2 md:mb-3 lg:mb-4 ">
              {translate(dict, "delivery_return_policy")}
            </div>
            <div className="bg-[#FFF7F0] text-sm md:text-base p-2 rounded-b-lg whitespace-pre-line">
              {translate(dict, "delivery_return_policy_content")}
            </div>
          </div>

          <div className=" rounded-lg mb-4">
            <div className=" bg-secondary text-white px-6 font-bold py-1 md:py-3  lg:text-lg rounded-xl text-sm  w-fit mb-2 md:mb-3 lg:mb-4 ">
              {translate(dict, "exchange_or_return")}
            </div>
            <div className="bg-[#FFF7F0] text-sm md:text-base p-2 rounded-b-lg whitespace-pre-line">
              {translate(dict, "exchange_or_return_content")}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
