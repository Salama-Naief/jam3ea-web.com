import Container from "@/components/Container";
import NewPasswordForm from "./components/NewPasswordForm";
import Image from "next/image.js";
import newPasswordImage from "../../../../public/assets/new-password.svg";

export default function Login() {
  return (
    <div>
      <Container>
        <div className="md:grid md:grid-cols-2  justify-center items-center h-screen">
          <Image
            src={newPasswordImage}
            alt="newPasswordImage"
            className="hidden md:block"
            priority
          />
          <NewPasswordForm />
        </div>
      </Container>
    </div>
  );
}
