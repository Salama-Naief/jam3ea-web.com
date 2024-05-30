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
      <Image src={logo} alt="logo" priority />
    </Link>
  );
}

export default Logo;
