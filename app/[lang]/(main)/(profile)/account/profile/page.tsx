import Navbar from "@/components/Navbar";
import UpdateProfileForm from "./components/UpdateProfileForm";
import apiHandler from "@/lib/utils/apiHandler";
import { IUser } from "@/module/(main)/(profile)/types";
import Container from "@/components/Container";
import SharedLayout from "../../components/SharedLayout";
import { getDictionary } from "@/lib/utils/dictionary";
import { Locale } from "../../../../../../i18n-config";
import { translate } from "@/lib/utils/serverHelpers";

export default async function Profile({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const user: IUser = await apiHandler("/profile");
  const dict = await getDictionary(lang);
  return (
    <div>
      <SharedLayout
        dict={dict}
        user={user}
        title={translate(dict, dict.update_profile)}
      >
        <UpdateProfileForm user={user} />
      </SharedLayout>
    </div>
  );
}
