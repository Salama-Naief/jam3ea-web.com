import Navbar from "@/components/Navbar";
import UpdatePasswordForm from "./components/UpdatePasswordForm";
import Container from "@/components/Container";
import SharedLayout from "../../components/SharedLayout";

export default async function Profile() {
  return (
    <div>
      <SharedLayout title="Change Password">
        <UpdatePasswordForm />
      </SharedLayout>
    </div>
  );
}
