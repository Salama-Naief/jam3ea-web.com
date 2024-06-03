import UpdateEmailForm from "./components/UpdateEmailForm";
import apiHandler from "@/lib/utils/apiHandler";
import { IUser } from "@/module/(main)/(profile)/types";
import SharedLayout from "../../components/SharedLayout";

export default async function Profile() {
  const user: IUser = await apiHandler("/profile");
  return (
    <div>
      <SharedLayout user={user} title="Update Profile">
        <UpdateEmailForm user={user} />
      </SharedLayout>
    </div>
  );
}
