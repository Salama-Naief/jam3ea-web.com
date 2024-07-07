import Container from "@/components/Container";
import ResetPassword from "./components/ResetPasswordForm";
import Image from "next/image.js";
import resetPasswordImage from "../../../../public/assets/reset-password.svg";

export default function Login() {
  return (
    <div>
      <Container>
        <div className="lg:grid lg:grid-cols-2  w-full justify-center items-center h-screen">
          <Image
            src={resetPasswordImage}
            alt="resetPasswordImage"
            className="mt-6 mb-4 mx-auto"
            priority
          />
          <ResetPassword />
        </div>
      </Container>
    </div>
  );
}
