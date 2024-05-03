import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo.svg";

function Logo() {
  return <Image src={logo} alt="logo" />;
}

export default Logo;
