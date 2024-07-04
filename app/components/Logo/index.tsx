"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo.svg";
import Link from "next/link";
import { useCookies } from "react-cookie";

function Logo() {
  const [cookies, setCookie] = useCookies(["isVIP"]);

  const handleIsVIP = () => {
    setCookie("isVIP", false);
  };

  return (
    <Link href={"/"} onClick={() => handleIsVIP()}>
      <div className=" w-32 md:w-40 lg:w-48 h-10 md:h-14 lg:h-16">
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={100}
          priority
          className="hidden lg:block"
        />
        <Image
          src={logo}
          alt="logo"
          width={150}
          height={75}
          priority
          className="lg:hidden block"
        />
      </div>
    </Link>
  );
}

export default Logo;
