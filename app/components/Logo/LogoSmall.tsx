import Image from "next/image";
import React from "react";
import logoSm from "../../../public/assets/logo.svg";

function LogoSmall() {
  return <Image src={logoSm} width={200} height={100} alt="logo" />;
}

export default LogoSmall;
