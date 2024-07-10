import UpdateEmailForm from "./components/UpdateEmailForm";
import apiHandler from "@/lib/utils/apiHandler";
import { IUser } from "@/module/(main)/(profile)/types";
import SharedLayout from "../../components/SharedLayout";
import { getDictionary } from "@/lib/utils/dictionary";
import { Locale } from "../../../../../../i18n-config";
import { translate } from "@/lib/utils/serverHelpers";

export default async function UpdateEmial({
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
        <UpdateEmailForm user={user} />
      </SharedLayout>
    </div>
  );
}
