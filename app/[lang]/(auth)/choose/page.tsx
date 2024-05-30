import Container from "@/components/Container";
import webRoutes from "@/lib/utils/webRoutes";
import Image from "next/image";
import Link from "next/link";
import LanguageSelect from "./components/LanguageSelect";
import { Locale } from "../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import AddressSelector from "@/components/Navbar/AddressSelector";
import { getCities } from "@/module/(main)/city/services";
import apiHandler from "@/lib/utils/apiHandler";
import ChooseCity from "./components/ChooseCity";
import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

export default async function Choose({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const cookie = cookies();

  // if (cookie.get("auth.token") && cookie.get("auth.user")) {
  //   redirect("/", RedirectType.push);
  // }

  const cities: any = await apiHandler("/city", "GET", undefined, true);

  return (
    <div>
      <Container>
        <div className="app-container pt-24">
          <Image
            src={"/assets/logo.svg"}
            className="mx-auto mb-16"
            alt="jamie"
            width={200}
            height={100}
          />
          <div className="flex"></div>
          <LanguageSelect />
          <div className="flex gap-4 items-center justify-center mb-8">
            <Link
              href={webRoutes.login}
              className="bg-primary px-4 py-2 text-white rounded-full"
            >
              {translate(dict, "login")}
            </Link>
            <Link
              locale={lang}
              href={webRoutes.register}
              className="text-secondary"
            >
              {translate(dict, "register")}
            </Link>
          </div>
          <div className="flex">
            {/* <Link
              href={webRoutes.addresses}
              className="text-secondary mx-auto"
              // as={`ar/${webRoutes.addresses}`}
            >
              {translate(dict, "shop_as_guest")}
            </Link> */}
            <ChooseCity
              buttonLabel={translate(dict, "shop_as_guest")}
              cities={cities.data ? cities.data[0] : []}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
