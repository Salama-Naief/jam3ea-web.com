import Container from "@/components/Container";
import NewPasswordForm from "./components/NewPasswordForm";
import Image from "next/image.js";
import newPasswordImage from "../../../../public/assets/new-password.svg";

export default function Login() {
  return (
    <div>
      <Container>
        <div className="lg:grid lg:grid-cols-2  w-full justify-center items-center h-screen">
          <Image
            src={newPasswordImage}
            alt="newPasswordImage"
            className="mt-6 mb-4 mx-auto"
            priority
          />
          <NewPasswordForm />
        </div>
      </Container>
    </div>
  );
}
