import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import LoginForm from "./components/LoginForm.tsx";
import Image from "next/image.js";
import panaImage from "../../../../public/assets/pana.svg";
import { cookies } from "next/headers.js";
import { redirect } from "next/navigation.js";

export default function Login() {
  const cookie = cookies();
  if (cookie.get("auth.token") && cookie.get("auth.user")) {
    redirect("/");
  }
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
