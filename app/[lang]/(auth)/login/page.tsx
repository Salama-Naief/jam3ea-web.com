import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import LoginForm from "./components/LoginForm.tsx";
import Image from "next/image.js";
import panaImage from "../../../../public/assets/pana.svg";

export default function Login() {
  return (
    <div>
      <Container>
        <div className="md:grid md:grid-cols-2  justify-center items-center h-screen">
          <Image
            src={panaImage}
            alt="pana"
            priority
            className="hidden md:block"
          />
          <LoginForm />
        </div>
      </Container>
    </div>
  );
}
