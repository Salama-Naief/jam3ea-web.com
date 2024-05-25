import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo.svg";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"}>
      <Image src={logo} alt="logo" priority />
    </Link>
  );
}

export default Logo;
