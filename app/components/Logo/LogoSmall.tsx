import Image from "next/image";
import React from "react";
import logoSm from "../../../public/assets/logo.svg";
import Link from "next/link";

function LogoSmall() {
  return (
    <Link href={"/"}>
      <Image src={logoSm} width={200} height={100} alt="logo" />;
    </Link>
  );
}

export default LogoSmall;
