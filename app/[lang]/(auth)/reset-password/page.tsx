import Container from "@/components/Container";
import ResetPassword from "./components/ResetPasswordForm";
import Image from "next/image.js";
import resetPasswordImage from "../../../../public/assets/reset-password.svg";

export default function Login() {
  return (
    <div>
      <Container>
        <div className="md:grid md:grid-cols-2  justify-center items-center h-screen">
          <Image
            src={resetPasswordImage}
            alt="resetPasswordImage"
            className="hidden md:block"
            priority
          />
          <ResetPassword />
        </div>
      </Container>
    </div>
  );
}
