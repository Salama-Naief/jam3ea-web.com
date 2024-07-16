import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import AddAddress from "./components/AddAddress";
import AddressesList from "./components/AddressesList";
import { Locale } from "../../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import { cookies } from "next/headers";
import apiHandler from "@/lib/utils/apiHandler";
import { IUser } from "../types";
import SharedLayout from "../components/SharedLayout";
import StaticMap from "./components/Map";
import { FaMapMarkerAlt } from "react-icons/fa";
import AddressCard from "./components/AddressesList/AddressCard";
import AddressData from "./components/AddressData";
import { ICity } from "../../city/types";

export default async function Addresses({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const user: IUser = await apiHandler(
    "/profile",
    "GET",
    undefined,
    true,
    false
  );
  let city: ICity | null = null;
  if (user && user.address.city_id) {
    city = await apiHandler("/city/" + user.address.city_id);
  }

  return (
    <div>
      <SharedLayout
        dict={dict}
        user={user}
        title={translate(dict, dict.my_addresses)}
      >
        <div>
          {user.address.latitude &&
          user.address.latitude > 0 &&
          user.address.longitude &&
          user.address.longitude > 0 ? (
            <StaticMap user={user} staticMap={true} />
          ) : (
            <div className="bg-gray-100 h-64 w-full flex items-center justify-center rounded-lg">
              <div className="flex flex-col items-center text-gray-400">
                <FaMapMarkerAlt size={48} />
                <p className="text-center py-4 text-sm md:text-base lg:text-[24px]">
                  {translate(dict, dict.no_address)}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="mt-4">
          {/* <AddressesList user={user} /> */}
          <AddressData user={user} city={city} />
        </div>
        <AddAddress user={user} />
      </SharedLayout>
    </div>
  );
}
