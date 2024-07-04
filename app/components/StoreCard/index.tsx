"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { useCookies } from "react-cookie";

interface Props {
  image: string | StaticImageData;
  label: string;
  link: string;
  name: string;
}
function StoreCard({ image, label, link, name }: Props) {
  // const { isLoggedIn, translate, changeLanguage, language, logout } =
  //   useContext(AuthContext);
  const [cookies, setCookie] = useCookies(["isVIP"]);

  const handleIsVIP = (link: string) => {
    if (link.includes("/mart")) {
      setCookie("isVIP", true);
    } else {
      setCookie("isVIP", false);
    }
  };

  return (
    <Link href={link} onClick={() => handleIsVIP(link)}>
      <div className="bg-gray-100  shadow-md p-1 lg:p-3 w-full h-full rounded-2xl">
        <div className="relative w-full h-24 md:h-44 lg:h-64">
          <Image
            src={image}
            fill
            alt={name}
            quality={100}
            sizes="w-400 h-400"
            priority
          />
        </div>
        <div className="text-center  md:text-xl lg:text-3xl text-secondary font-bold">
          {name}
        </div>
      </div>
      <div
        className="text-center text-sm md:text-base font-semibold lg:text-lg py-2"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </Link>
  );
}

export default StoreCard;
