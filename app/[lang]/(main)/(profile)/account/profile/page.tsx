import Navbar from "@/components/Navbar";
import UpdateProfileForm from "./components/UpdateProfileForm";
import apiHandler from "@/lib/utils/apiHandler";
import { IUser } from "@/module/(main)/(profile)/types";
import Container from "@/components/Container";
import SharedLayout from "../../components/SharedLayout";

export default async function Profile() {
  const user: IUser = await apiHandler("/profile");
  return (
    <div>
      <SharedLayout title="Update Profile">
        <UpdateProfileForm user={user} />
      </SharedLayout>
    </div>
  );
}
