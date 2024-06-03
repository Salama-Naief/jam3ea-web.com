import Navbar from "@/components/Navbar";
import UpdatePasswordForm from "./components/UpdatePasswordForm";
import Container from "@/components/Container";
import SharedLayout from "../../components/SharedLayout";
import apiHandler from "@/lib/utils/apiHandler";
import { IUser } from "../../types";

export default async function Profile() {
  const user: IUser = await apiHandler("/profile");
  return (
    <div>
      <SharedLayout user={user} title="Change Password">
        <UpdatePasswordForm />
      </SharedLayout>
    </div>
  );
}
