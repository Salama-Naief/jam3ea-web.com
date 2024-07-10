import Navbar from "@/components/Navbar";
import UpdatePasswordForm from "./components/UpdatePasswordForm";
import Container from "@/components/Container";
import SharedLayout from "../../components/SharedLayout";
import apiHandler from "@/lib/utils/apiHandler";
import { IUser } from "../../types";
import { Locale } from "../../../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";

export default async function UpdatePassword({
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
        <UpdatePasswordForm />
      </SharedLayout>
    </div>
  );
}
